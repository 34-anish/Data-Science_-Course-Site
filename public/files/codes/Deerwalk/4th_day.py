
#OOP
class MyClass:
    x = 10
    
new_object = MyClass
print(new_object)
new_object_assigned = MyClass()
print(new_object_assigned)


class PersonClass:
    def __init__(self,my_name,my_age):
        self.person_name = my_name
        self.person_age = my_age
    def introduce_myself(self):
        return f"Hello I am {self.person_name} and I am {self.person_age} years old "
first_person = PersonClass("Anish",25)
print(first_person.introduce_myself())

class DeerwalkCollege:
    def __init__(self,name):
        self.student_name = name
    def greet_student(self):
        return "Hello " + self.student_name
    def introduce_student(self):
        message = self.greet_student()
        print(message + "! Welcome to Deerwalk College")
first_person = DeerwalkCollege("Anish")
first_person.introduce_student()


class Dog:
    species = "Canine"
    def __init__(self,name):
        self.name = name

dog1 = Dog("Tommy")
print("Dog's species is",dog1.species)
print("Dog's species is",dog1.name)

class Animal:
    def __init__(self):
        print("This animal eats food")

class Dog(Animal):
    def __init__(self):
        print("Dog barks")
dog = Dog()

