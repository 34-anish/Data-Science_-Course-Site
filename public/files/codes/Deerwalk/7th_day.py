#File Handling
with open("example.txt",'w')as file:
    file.write("Hello World")
with open("example.txt",'a')as file:
    file.write(" \n Hello from the other side")

with open("example.txt",'r') as file:
    lines = file.readlines()
    print(lines)

file = open("example.txt",'r')
print(file.read())
print(file.closed)
with open("example2.txt",'x')as file:
    file.write(" \n Hello from the other side")

import os

if os.path.exists("example.txt"):
    print("File exists")
else:
    print("File doesn't exits")

# new.txt file exists w , x
if os.path.exists("example.txt"):
    with open("example.txt", "w") as file:
        print("File exists")
        file.write("Hello World")

else:
    with open("example.txt", "x") as file:
        print("File doesn't exist")
        file.write("Hello World")

# os.remove('example.txt')

from pathlib import Path

file_path = Path("/home/javra/Desktop/deerwalk/example.txt")
if file_path.exists():
    print("File Exists")

try:
    number = int(input("Enter a number: "))
    result = 50 / number
except ValueError:
    print("Enter a valid integer")
except ZeroDivisionError:
    print("Infinity")
else:
    print("Result:",result)
finally:
    print("Execution Completed")
    

try:
    with open("example100.txt",'r' ) as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("This file does not exist")
