use std::sync::Mutex;
use std::sync::Arc;
use once_cell::sync::OnceCell;

struct Logger {
    log_history: Mutex<Vec<String>>, // Mutex is used to ensure thread safety
}

impl Logger {
    fn get_instance() -> &'static Arc<Logger> {
        static INSTANCE: OnceCell<Arc<Logger>> = OnceCell::new();
        INSTANCE.get_or_init(|| {
            Arc::new(Logger {
                log_history: Mutex::new(vec![]),
            })
        })
    }

    fn log(&self, message: &str) {
        let timestamp = chrono::Utc::now().to_rfc3339();
        let log_entry = format!("[{}] {}", timestamp, message);
        
        let mut log_history = self.log_history.lock().unwrap();
        log_history.push(log_entry.clone());
        println!("{}", log_entry);        
    }

    fn get_log_history(&self) -> Vec<String> {
        let log_history = self.log_history.lock().unwrap();
        log_history.clone()
    }
}

fn main() {
    let logger1 = Logger::get_instance();
    let logger2 = Logger::get_instance();

    println!("{}", Arc::ptr_eq(logger1, logger2)); // Output: true, both Arcs point to the same instance

    logger1.log("User logged in");
    logger2.log("Data saved to database");

    println!("{:?}", logger1.get_log_history());

    // The Logger struct now uses a static OnceCell to lazy initialize a thread-safe, Arc-wrapped instance.
    // This ensures that only one instance of Logger is created and shared across the application.
    // The Mutex inside the Logger struct ensures that log_history can be safely accessed from multiple threads.
    // The use of Arc and Mutex makes the Logger thread-safe and fits well with Rust's ownership and concurrency model.
    // The getInstance() method has been renamed to get_instance() to follow Rust's naming conventions.
    // The log() and get_log_history() methods function similarly to their original counterparts, but are adapted to work with Rust's type system and concurrency model.
    // In the client code, Arc::ptr_eq function checks if two Arc pointers point to the same instance, confirming the singleton behavior.
    // Rust's chrono crate is used for timestamp generation to log messages with their creation time.
    // This translation not only changes the syntax but also adapts the singleton pattern to fit idiomatic Rust, ensuring thread safety and leveraging Rust's powerful concurrency primitives.
}