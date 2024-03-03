class Subject {
  request(): string {
    return 'Subject: Handling request.';
  }
}

class RealSubject extends Subject {
  request(): string {
    return 'RealSubject: Handling request.';
  }
}

class Proxy extends Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    super();
    this.realSubject = realSubject;
  }

  request(): string {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
      return 'Proxy: Logged and handing over to RealSubject.';
    }
    return 'Proxy: I am sorry, but I cannot let you through.';
  }

  private checkAccess(): boolean {
    // Some real checks should go here.
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

// Client code
const realSubject = new RealSubject();
console.log(realSubject.request());

const proxy = new Proxy(realSubject);
console.log(proxy.request());
