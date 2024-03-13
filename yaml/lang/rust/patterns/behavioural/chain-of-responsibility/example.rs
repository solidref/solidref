trait SupportHandler {
    fn set_next_handler(&mut self, handler: Box<dyn SupportHandler>);
    fn handle_request(&self, request: &str) -> Option<String>;
}

struct Level1Support {
    next_handler: Option<Box<dyn SupportHandler>>,
}

impl Level1Support {
    fn new() -> Level1Support {
        Level1Support { next_handler: None }
    }
}

impl SupportHandler for Level1Support {
    fn set_next_handler(&mut self, handler: Box<dyn SupportHandler>) {
        self.next_handler = Some(handler);
    }

    fn handle_request(&self, request: &str) -> Option<String> {
        if request.contains("basic") {
            Some("Level 1 Support: Issue resolved at basic level.".to_string())
        } else if let Some(handler) = &self.next_handler {
            handler.handle_request(request)
        } else {
            None
        }
    }
}

struct Level2Support {
    next_handler: Option<Box<dyn SupportHandler>>,
}

impl Level2Support {
    fn new() -> Level2Support {
        Level2Support { next_handler: None }
    }
}

impl SupportHandler for Level2Support {
    fn set_next_handler(&mut self, handler: Box<dyn SupportHandler>) {
        self.next_handler = Some(handler);
    }

    fn handle_request(&self, request: &str) -> Option<String> {
        if request.contains("advanced") {
            Some("Level 2 Support: Issue resolved at advanced level.".to_string())
        } else if let Some(handler) = &self.next_handler {
            handler.handle_request(request)
        } else {
            None
        }
    }
}

struct Level3Support;

impl SupportHandler for Level3Support {
    fn set_next_handler(&mut self, _: Box<dyn SupportHandler>) {
        panic!("Level 3 Support is the highest level and does not have a next handler.");
    }

    fn handle_request(&self, request: &str) -> Option<String> {
        if request.contains("bug") {
            Some("Level 3 Support: Issue resolved at development level.".to_string())
        } else {
            Some("Level 3 Support: Unable to resolve the issue.".to_string())
        }
    }
}

fn main() {
    let mut level1 = Level1Support::new();
    let mut level2 = Level2Support::new();
    let level3 = Level3Support;

    level1.set_next_handler(Box::new(level2));
    level2.set_next_handler(Box::new(level3));

    let request1 = "Fix basic login issue";
    let request2 = "Debug advanced performance problem";
    let request3 = "Investigate bug causing application crash";

    println!("{}", level1.handle_request(request1).unwrap());
    println!("{}", level1.handle_request(request2).unwrap());
    println!("{}", level1.handle_request(request3).unwrap());
}