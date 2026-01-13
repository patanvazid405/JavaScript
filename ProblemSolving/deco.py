def My_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@My_decorator
def hello():
    print("HII")

hello()


