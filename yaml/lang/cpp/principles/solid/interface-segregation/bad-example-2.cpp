// Bad: A single interface with multiple responsibilities.
class MultiFunctionDevice {
public:
  virtual void print() const = 0;
  virtual void fax() const = 0;
  virtual void scan() const = 0;
};

class SimplePrinter : public MultiFunctionDevice {
  void print() const override { /* implementation */
  }
  void
  fax() const override { /* Not supported, but still has to be implemented */
  }
  void
  scan() const override { /* Not supported, but still has to be implemented */
  }
};
