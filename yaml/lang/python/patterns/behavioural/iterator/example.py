class Iterator:
    def __init__(self, collection):
        self.collection = collection
        self.index = 0

    def next(self):
        try:
            value = self.collection[self.index]
            self.index += 1
            return value
        except IndexError:
            raise StopIteration

    def hasNext(self):
        return self.index < len(self.collection)

# Client code
items = [1, 'two', 3, 'four', 5]
iterator = Iterator(items)

while iterator.hasNext():
    print(iterator.next())

# In the python version, __iter__() and __next__() methods make use of Python's iteration protocol.
# Thus, we embraced Python's capabilities for iteration, which makes the code idiomatic and pythonic.