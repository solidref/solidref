// Subject: Interface representing the common behavior of RealSubject and Proxy
interface IHttpServer {
  request(url: string): Promise<string>;
}

// RealSubject: The actual HTTP server implementation
class HttpServer implements IHttpServer {
  async request(url: string): Promise<string> {
    // Simulating HTTP request to the actual server
    return `Response from server for URL: ${url}`;
  }
}

// Proxy: Proxy server that intercepts requests before forwarding them to the real server
class ProxyServer implements IHttpServer {
  private httpServer: HttpServer;

  constructor() {
    this.httpServer = new HttpServer();
  }

  async request(url: string): Promise<string> {
    // Additional logic can be added here, e.g., caching, access control, logging
    console.log(`Proxy: Intercepted request for URL: ${url}`);

    // Forward the request to the real server
    const response = await this.httpServer.request(url);

    // Additional processing on the response can be done here

    return response;
  }
}

// Client code
async function testProxy() {
  const proxy = new ProxyServer();

  // Client sends a request to the proxy server
  const response = await proxy.request("https://example.com");

  console.log(response);
}

// Test the proxy
testProxy();

/**
 * The IHttpServer interface defines the common behavior for both the HttpServer and ProxyServer classes.
 *
 * The HttpServer class represents the real HTTP server implementation. It implements the request method
 * to send HTTP requests to the actual server.
 *
 * The ProxyServer class acts as a proxy server. It intercepts requests before forwarding them to the real
 * server. The request method of the proxy performs additional tasks such as logging, caching, or access
 * control before delegating the request to the real server.
 *
 * In the client code, we instantiate a ProxyServer object and send a request to it. The proxy intercepts
 * the request, performs any necessary processing, and then forwards the request to the real server.
 * Finally, it returns the response to the client.
 */
