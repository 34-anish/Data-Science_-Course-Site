#Default Parameter
def greet(name ="Guest"):
    print("Hello ",name)
greet()
greet("Sujan")

def add(a,b):
    return a+b

print(add(5,3))

#Write a function to find the difference between two numbers

def subtract_of_two_numbers(first_number,second_number):
    """return difference between two numbers

    Args:
        first_number (first number): number
        second_number (second_number):number

    Returns:
        _type_: difference between two numbers
    """
    return first_number - second_number

print(subtract_of_two_numbers(3,1))

def difference(a,b):
    return a-b

# print(help(range(0,1)))
print(range.__doc__)
# print(help(subtract_of_two_numbers))
print(subtract_of_two_numbers.__doc__)
#Write a function to calculate area of right angled triangle and rectangle
# Area of triangle = 1/2*b*h, rectangle = l*b
def traingle_area(base,height):
    return 1/2*base*height

def rectangle_area(base,height):
    return base*height
print("Triangle area with base 2 and height 3 is",traingle_area(2,3))
print("Rectangle area with base 2 and height 3 is",rectangle_area(2,3))

#Can you use a singular function to return area of either triangle or rectangle

def area_of_figure(base,height,figure):
    if figure == 'triangle':
        return 1/2*base*height
    elif figure == 'rectangle' or figure == 'square':
        return base*height
    else:
        return "Shape not in our program"
print(area_of_figure(2,3,'triangle')    )
print(area_of_figure(2,3,'rectangle')    )
print(area_of_figure(2,3,'square')    )
print(area_of_figure(2,3,'satkrit')    )

#Args
def last_participant(first_student,*last_student):
    print("The first student joining the class is",first_student)
    print("The last student joining the class is",last_student[-1])
last_participant("Satkrit","Sujan","Sakcham","Amisha",'Swikriti','Ritika')
    