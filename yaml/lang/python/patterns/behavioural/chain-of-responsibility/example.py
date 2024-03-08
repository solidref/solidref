class SupportHandler:
    def set_next_handler(self, handler):
        pass

    def handle_request(self, request):
        pass

class Level1Support(SupportHandler):
    def __init__(self):
        self.next_handler = None

    def set_next_handler(self, handler):
        self.next_handler = handler

    def handle_request(self, request):
        if 'basic' in request:
            return 'Level 1 Support: Issue resolved at basic level.'
        elif self.next_handler is not None:
            return self.next_handler.handle_request(request)
        else:
            return None  # No more handlers in the chain

class Level2Support(SupportHandler):
    def __init__(self):
        self.next_handler = None

    def set_next_handler(self, handler):
        self.next_handler = handler

    def handle_request(self, request):
        if 'advanced' in request:
            return 'Level 2 Support: Issue resolved at advanced level.'
        elif self.next_handler is not None:
            return self.next_handler.handle_request(request)
        else:
            return None  # No more handlers in the chain

class Level3Support(SupportHandler):
    def handle_request(self, request):
        if 'bug' in request:
            return 'Level 3 Support: Issue resolved at development level.'
        else:
            return 'Level 3 Support: Unable to resolve the issue.'

    def set_next_handler(self, handler):
        raise Exception('Level 3 Support is the highest level and does not have a next handler.')

def main():
    # Create instances of support handlers
    level1 = Level1Support()
    level2 = Level2Support()
    level3 = Level3Support()

    # Chain the handlers together
    level1.set_next_handler(level2)
    level2.set_next_handler(level3)

    # Simulate support requests
    request1 = 'Fix basic login issue'
    request2 = 'Debug advanced performance problem'
    request3 = 'Investigate bug causing application crash'

    # Process requests through the chain of responsibility
    print(level1.handle_request(request1))  # Output: Level 1 Support: Issue resolved at basic level.
    print(level1.handle_request(request2))  # Output: Level 2 Support: Issue resolved at advanced level.
    print(level1.handle_request(request3))  # Output: Level 3 Support: Issue resolved at development level.

if __name__ == '__main__':
    main()