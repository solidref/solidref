class Button {
public:
  virtual void render() const = 0;
  virtual ~Button() {}
};

class Checkbox {
public:
  virtual void render() const = 0;
  virtual ~Checkbox() {}
};

// Windows family
class WindowsButton : public Button {
public:
  void render() const override {
    std::cout << "Rendering a Windows button." << std::endl;
  }
};

class WindowsCheckbox : public Checkbox {
public:
  void render() const override {
    std::cout << "Rendering a Windows checkbox." << std::endl;
  }
};

// macOS family
class MacOSButton : public Button {
public:
  void render() const override {
    std::cout << "Rendering a macOS button." << std::endl;
  }
};

class MacOSCheckbox : public Checkbox {
public:
  void render() const override {
    std::cout << "Rendering a macOS checkbox." << std::endl;
  }
};

class GUIFactory {
public:
  virtual std::unique_ptr<Button> createButton() const = 0;
  virtual std::unique_ptr<Checkbox> createCheckbox() const = 0;
  virtual ~GUIFactory() {}
};

class WindowsFactory : public GUIFactory {
public:
  std::unique_ptr<Button> createButton() const override {
    return std::make_unique<WindowsButton>();
  }

  std::unique_ptr<Checkbox> createCheckbox() const override {
    return std::make_unique<WindowsCheckbox>();
  }
};

class MacOSFactory : public GUIFactory {
public:
  std::unique_ptr<Button> createButton() const override {
    return std::make_unique<MacOSButton>();
  }

  std::unique_ptr<Checkbox> createCheckbox() const override {
    return std::make_unique<MacOSCheckbox>();
  }
};

void createGUI(const GUIFactory &factory) {
  auto button = factory.createButton();
  auto checkbox = factory.createCheckbox();

  button->render();
  checkbox->render();
}

int main() {
  std::cout << "Client: Testing client code with the first factory type:\n";
  WindowsFactory windowsFactory;
  createGUI(windowsFactory);

  std::cout << "\nClient: Testing the same client code with the second factory "
               "type:\n";
  MacOSFactory macFactory;
  createGUI(macFactory);

  return 0;
}

// Encapsulation: Each factory encapsulates the creation logic for a family of
// products, making it easy to extend or modify product families without
// affecting client code.

// Polymorphism: Client code operates on interfaces (Button, Checkbox,
// GUIFactory), allowing for flexibility and interchangeability of concrete
// implementations.

// Separation of Concerns: The pattern separates the product construction
// process from the representation of the finished products, enabling
// independent development and maintenance of both aspects.

// This example demonstrates a practical application of the Abstract Factory
// Pattern, enabling the creation of cohesive families of GUI elements tailored
// for different operating systems, all while keeping the client code decoupled
// from the concrete classes of the elements it uses.
