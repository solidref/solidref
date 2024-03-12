struct Editor {
    text: String,
}

impl Editor {
    fn new(text: String) -> Self {
        Self { text }
    }

    fn set_text(&mut self, text: String) {
        self.text = text;
    }

    fn get_text(&self) -> &str {
        &self.text
    }

    fn save(&self) -> Memento {
        Memento::new(self.text.clone())
    }

    fn restore(&mut self, memento: Memento) {
        self.text = memento.get_state();
    }
}

struct Memento {
    state: String,
}

impl Memento {
    fn new(state: String) -> Self {
        Self { state }
    }

    fn get_state(&self) -> String {
        self.state.clone()
    }
}

struct History {
    mementos: Vec<Memento>,
}

impl History {
    fn new() -> Self {
        Self { mementos: Vec::new() }
    }

    fn add_memento(&mut self, memento: Memento) {
        self.mementos.push(memento);
    }

    fn get_latest_memento(&self) -> Option<&Memento> {
        self.mementos.last()
    }
}

fn main() {
    let mut editor = Editor::new("Initial text".to_string());

    let mut history = History::new();

    history.add_memento(editor.save());

    editor.set_text("Modified text".to_string());

    history.add_memento(editor.save());

    if let Some(latest_memento) = history.get_latest_memento() {
        editor.restore(latest_memento.clone());
    }

    println!("{}", editor.get_text());
}