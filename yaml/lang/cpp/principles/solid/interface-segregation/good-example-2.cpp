// Good: Splitting interfaces to ensure that implementing classes only need to
// use relevant methods.
class Printable {
public:
  virtual void print() const = 0;
};

class Scannable {
public:
  virtual void scan() const = 0;
};

class AllInOnePrinter : public Printable, public Scannable {
  void print() const override { /* implementation */
  }
  void scan() const override { /* implementation */
  }
};
