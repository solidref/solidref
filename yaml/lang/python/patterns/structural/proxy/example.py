from abc import ABC, abstractmethod
import asyncio

class IHttpServer(ABC):
    @abstractmethod
    async def request(self, url: str) -> str:
        pass

class HttpServer(IHttpServer):
    async def request(self, url: str) -> str:
        # Simulating HTTP request to the actual server
        return f'Response from server for URL: {url}'

class ProxyServer(IHttpServer):
    def __init__(self):
        self.httpServer = HttpServer()

    async def request(self, url: str) -> str:
        # Additional logic can be added here, e.g., caching, access control, logging
        print(f'Proxy: Intercepted request for URL: {url}')

        # Forward the request to the real server
        response = await self.httpServer.request(url)

        # Additional processing on the response can be done here

        return response

async def testProxy():
    proxy = ProxyServer()

    # Client sends a request to the proxy server
    response = await proxy.request("https://example.com")

    print(response)

# Test the proxy
asyncio.run(testProxy())