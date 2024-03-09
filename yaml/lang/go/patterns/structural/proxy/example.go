package main

import (
	"fmt"
)

// IHttpServer represents the common behavior of RealSubject and Proxy
type IHttpServer interface {
	request(url string) (string, error)
}

// HttpServer is the actual HTTP server implementation
type HttpServer struct{}

// request simulates an HTTP request to the actual server
func (h *HttpServer) request(url string) (string, error) {
	return fmt.Sprintf("Response from server for URL: %s", url), nil
}

// ProxyServer is a proxy server that intercepts requests before forwarding them to the real server
type ProxyServer struct {
	httpServer *HttpServer
}

// NewProxyServer creates a new instance of ProxyServer
func NewProxyServer() *ProxyServer {
	return &ProxyServer{
		httpServer: &HttpServer{},
	}
}

// request performs additional logic before forwarding the request to the real server
func (p *ProxyServer) request(url string) (string, error) {
	// Additional logic can be added here, e.g., caching, access control, logging
	fmt.Printf("Proxy: Intercepted request for URL: %s\n", url)

	// Forward the request to the real server
	response, err := p.httpServer.request(url)
	if err != nil {
		return "", err
	}

	// Additional processing on the response can be done here

	return response, nil
}

// testProxy is the client code that sends a request to the proxy server
func testProxy() {
	proxy := NewProxyServer()

	// Client sends a request to the proxy server
	response, err := proxy.request("https://example.com")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(response)
}

func main() {
	// Test the proxy
	testProxy()
}

// Explanation:
//
// The IHttpServer interface defines the common behavior for both the HttpServer and ProxyServer structs.
//
// The HttpServer struct represents the real HTTP server implementation. It implements the request method
// to simulate sending HTTP requests to an actual server.
//
// The ProxyServer struct acts as a proxy server. It intercepts requests before forwarding them to the real
// server. The request method of the proxy performs additional tasks such as logging, caching, or access
// control before delegating the request to the real server.
//
// In the client code, we instantiate a ProxyServer object and send a request to it. The proxy intercepts
// the request, performs any necessary processing, and then forwards the request to the real server.
// Finally, it returns the response to the client.