struct Iterator<T> {
    collection: Vec<T>,
    index: usize,
}

impl<T> Iterator<T> {
    fn new(collection: Vec<T>) -> Self {
        Self { collection, index: 0 }
    }

    fn next(&mut self) -> Option<&T> {
        if self.index < self.collection.len() {
            let result = &self.collection[self.index];
            self.index += 1;
            Some(result)
        } else {
            None
        }
    }

    fn has_next(&self) -> bool {
        self.index < self.collection.len()
    }
}

fn main() {
    let items = vec![1, 'two', 3, 'four', 5];
    let mut iterator = Iterator::new(items);

    while iterator.has_next() {
        println!("{:?}", iterator.next());
    }
}

// In this Rust version, the Iterator pattern is used to iterate over a collection. Just like in the original example,
// the Iterator struct defines methods for checking if there are more elements (has_next) and retrieving the next element (next).
// The main function illustrates how to create an iterator for a mixed collection and use it to iterate through the items, printing each one.
// This approach demonstrates a common Rust pattern for implementing iterators, leveraging Rust's type system and ownership rules for safety and efficiency.