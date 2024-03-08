using System;
using System.Threading.Tasks;

// Subject: Interface representing the common behavior of RealSubject and Proxy
public interface IHttpServer
{
  Task<string> Request(string url);
}

// RealSubject: The actual HTTP server implementation
public class HttpServer : IHttpServer
{
  public async Task<string> Request(string url)
  {
    // Simulating HTTP request to the actual server
    return $"Response from server for URL: {url}";
  }
}

// Proxy: Proxy server that intercepts requests before forwarding them to the real server
public class ProxyServer : IHttpServer
{
  private HttpServer httpServer;

  public ProxyServer()
  {
    this.httpServer = new HttpServer();
  }

  public async Task<string> Request(string url)
  {
    // Additional logic can be added here, e.g., caching, access control, logging
    Console.WriteLine($"Proxy: Intercepted request for URL: {url}");

    // Forward the request to the real server
    var response = await this.httpServer.Request(url);

    // Additional processing on the response can be done here

    return response;
  }
}

// Client code
public class Program
{
  public static async Task Main(string[] args)
  {
    var proxy = new ProxyServer();

    // Client sends a request to the proxy server
    var response = await proxy.Request("https://example.com");

    Console.WriteLine(response);
  }
}

// Explanation comments kept as requested:
/*
 * The IHttpServer interface defines the common behavior for both the HttpServer and ProxyServer classes.
 *
 * The HttpServer class represents the real HTTP server implementation. It implements the Request method
 * to send HTTP requests to the actual server.
 *
 * The ProxyServer class acts as a proxy server. It intercepts requests before forwarding them to the real
 * server. The Request method of the proxy performs additional tasks such as logging, caching, or access
 * control before delegating the request to the real server.
 *
 * In the client code, we instantiate a ProxyServer object and send a request to it. The proxy intercepts
 * the request, performs any necessary processing, and then forwards the request to the real server.
 * Finally, it returns the response to the client.
 */