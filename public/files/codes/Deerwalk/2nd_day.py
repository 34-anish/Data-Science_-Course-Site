a = 10
b = 5
print(a **b)

a += 2
print(a)

a *= 2
print(a)
a **= 2
print(a)

# Comparison Operator
a = 10
b = 5
print( a==b)
print( a!=b)
print(a>b)
print(a<b)
print(a<=b)
print(a>=b)

#logical Operator

age = 20
print(age >18 and age <21)
print(age >18 or age <21)
print(not age>18)
my_name = "Anish"
print( "i" in my_name)
print( "A" in my_name)

#Bitwise Operator
x = 5
y = 2
print(x&y)
print(x|y)
print(x^y)

a = 6
print(a <<1)
print(a >>1)
print(a >>2)
print(a <<2)

# WAP to find a number is even or odd
my_number = 2
if my_number % 2 == 0:
    print("even")
else:
    print("odd")
    
#List 
item_list = ['rent','lunch','dinner']
print(item_list[0])
print(item_list[1])
print(item_list[-1])
print(item_list[-2])
item_list.append('breakfast')
print(item_list)
item_list.insert(3,'trek')
print(item_list)
item_list.pop()
print(item_list)

for item in item_list:
    print(item)
print('trek' in item_list)

#WAP [1,2,3,4] -> square
number_list = [1,2,3,4]
squared_list = []
for number in number_list:
    squared_list.append(number**2)
# Now result should be [1,4,9,16]    
print(squared_list)

#List Comprehension
new_squared_list = [number **2 for number in number_list]
print(new_squared_list)


# [what_to_store for item in list]

new_list = [1,'one',2.0]
print(new_list)

#List is heterogenous 

#Tuple
point = (4,5)
print(point)
#Tuple cant be changed -> Immutable
# point[0] = 6
# print(point)

a = {1,2,3,3,2}
b= {3,4,5}
print(a)
# a[0]='1'
#Set -> Immutable
# print(a |b) # Union
print(a &b)  # intersection

#Dictionary