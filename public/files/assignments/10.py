# ==========================================
# Python, Functions, OOP, NumPy, Pandas, Matplotlib Refresher
# ==========================================

students = ["Asha", "Bikash", "Chandra", "Dipa", "Eshan"]

marks = [
    [78, 85, 90],
    [60, 72, 68],
    [88, 92, 95],
    [45, 56, 50],
    [70, 75, 80]
]

subjects = ["Math", "Science", "English"]


# ==========================================
# Part 1: Python Basics
# ==========================================

print("===== Part 1: Python Basics =====")

highest_total = 0
highest_student = ""

for i in range(len(students)):
    name = students[i]
    student_marks = marks[i]

    total = sum(student_marks)
    average = total / len(student_marks)

    passed = True
    for mark in student_marks:
        if mark < 50:
            passed = False

    status = "Pass" if passed else "Fail"

    print(f"Name: {name}")
    print(f"Marks: {student_marks}")
    print(f"Total: {total}")
    print(f"Average: {average:.2f}")
    print(f"Status: {status}")
    print("-" * 30)

    if total > highest_total:
        highest_total = total
        highest_student = name

print(f"Highest Scorer: {highest_student} with total marks {highest_total}")
print()


# ==========================================
# Part 2: Functions
# ==========================================

print("===== Part 2: Functions =====")

def calculate_total(marks):
    return sum(marks)


def calculate_average(marks):
    return sum(marks) / len(marks)


def has_passed(marks):
    for mark in marks:
        if mark < 50:
            return False
    return True


def get_grade(average):
    if average >= 90:
        return "A+"
    elif average >= 80:
        return "A"
    elif average >= 70:
        return "B"
    elif average >= 60:
        return "C"
    elif average >= 50:
        return "D"
    else:
        return "F"


for i in range(len(students)):
    name = students[i]
    student_marks = marks[i]

    total = calculate_total(student_marks)
    average = calculate_average(student_marks)
    status = "Pass" if has_passed(student_marks) else "Fail"
    grade = get_grade(average)

    print(f"Name: {name}")
    print(f"Total: {total}")
    print(f"Average: {average:.2f}")
    print(f"Status: {status}")
    print(f"Grade: {grade}")
    print("-" * 30)

print()


# ==========================================
# Part 3: Object-Oriented Programming
# ==========================================

print("===== Part 3: OOP =====")

class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def total(self):
        return sum(self.marks)

    def average(self):
        return self.total() / len(self.marks)

    def passed(self):
        for mark in self.marks:
            if mark < 50:
                return False
        return True

    def grade(self):
        average = self.average()

        if average >= 90:
            return "A+"
        elif average >= 80:
            return "A"
        elif average >= 70:
            return "B"
        elif average >= 60:
            return "C"
        elif average >= 50:
            return "D"
        else:
            return "F"

    def update_marks(self, new_marks):
        self.marks = new_marks

    def highest_mark(self):
        return max(self.marks)

    def lowest_mark(self):
        return min(self.marks)

    def display_report(self):
        status = "Pass" if self.passed() else "Fail"

        print(f"Name: {self.name}")
        print(f"Marks: {self.marks}")
        print(f"Total: {self.total()}")
        print(f"Average: {self.average():.2f}")
        print(f"Status: {status}")
        print(f"Grade: {self.grade()}")
        print(f"Highest Mark: {self.highest_mark()}")
        print(f"Lowest Mark: {self.lowest_mark()}")
        print("-" * 30)


student_objects = []

for i in range(len(students)):
    student = Student(students[i], marks[i])
    student_objects.append(student)

for student in student_objects:
    student.display_report()

print()


# ==========================================
# Part 4: NumPy
# ==========================================

print("===== Part 4: NumPy =====")

import numpy as np

marks_array = np.array(marks)

print("Marks Array:")
print(marks_array)

print("Shape of array:", marks_array.shape)

student_totals = marks_array.sum(axis=1)
print("Total marks of each student:", student_totals)

student_averages = marks_array.mean(axis=1)
print("Average marks of each student:", student_averages)

subject_averages = marks_array.mean(axis=0)
print("Average marks of each subject:", subject_averages)

highest_mark = marks_array.max()
print("Highest mark in dataset:", highest_mark)

lowest_mark = marks_array.min()
print("Lowest mark in dataset:", lowest_mark)

highest_total_index = student_totals.argmax()
print("Student with highest total:", students[highest_total_index])

bonus_marks = marks_array + 5
bonus_marks = np.where(bonus_marks > 100, 100, bonus_marks)

print("Marks after adding 5 bonus marks:")
print(bonus_marks)

math_marks = marks_array[:, 0]
students_more_than_80_math = np.sum(math_marks > 80)

print("Number of students scoring more than 80 in Math:", students_more_than_80_math)

print()


# ==========================================
# Part 5: Pandas
# ==========================================

print("===== Part 5: Pandas =====")

import pandas as pd

df = pd.DataFrame(marks, columns=subjects)
df["Name"] = students

df = df[["Name", "Math", "Science", "English"]]

print("First 5 rows:")
print(df.head())

print("\nDataFrame Info:")
print(df.info())

print("\nSummary Statistics:")
print(df.describe())

df["Total"] = df[["Math", "Science", "English"]].sum(axis=1)
df["Average"] = df[["Math", "Science", "English"]].mean(axis=1)

df["Status"] = df[["Math", "Science", "English"]].apply(
    lambda row: "Pass" if all(row >= 50) else "Fail",
    axis=1
)

df["Grade"] = df["Average"].apply(get_grade)

print("\nFinal DataFrame:")
print(df)

print("\nStudents sorted by Total marks:")
print(df.sort_values(by="Total", ascending=False))

print("\nStudents with average greater than 75:")
print(df[df["Average"] > 75])

print("\nStudents who failed at least one subject:")
print(df[df["Status"] == "Fail"])

print("\nSubject-wise average:")
print(df[["Math", "Science", "English"]].mean())

print("\nHighest scorer in each subject:")

for subject in subjects:
    highest_index = df[subject].idxmax()
    print(f"{subject}: {df.loc[highest_index, 'Name']} with {df.loc[highest_index, subject]} marks")

df.to_csv("student_report.csv", index=False)

print("\nCSV file exported successfully as student_report.csv")
print()


# ==========================================
# Part 6: Matplotlib
# ==========================================

print("===== Part 6: Matplotlib =====")

import matplotlib.pyplot as plt

# Bar chart: Total marks of each student
plt.figure(figsize=(8, 5))
plt.bar(df["Name"], df["Total"])
plt.title("Total Marks of Students")
plt.xlabel("Students")
plt.ylabel("Total Marks")
plt.show()


# Line chart: Average marks of each student
plt.figure(figsize=(8, 5))
plt.plot(df["Name"], df["Average"], marker="o")
plt.title("Average Marks of Students")
plt.xlabel("Students")
plt.ylabel("Average Marks")
plt.show()


# Grouped bar chart
x = np.arange(len(df["Name"]))
width = 0.25

plt.figure(figsize=(9, 5))
plt.bar(x - width, df["Math"], width, label="Math")
plt.bar(x, df["Science"], width, label="Science")
plt.bar(x + width, df["English"], width, label="English")

plt.xticks(x, df["Name"])
plt.title("Subject-wise Marks Comparison")
plt.xlabel("Students")
plt.ylabel("Marks")
plt.legend()
plt.show()


# Pie chart: Grade distribution
grade_counts = df["Grade"].value_counts()

plt.figure(figsize=(6, 6))
plt.pie(grade_counts, labels=grade_counts.index, autopct="%1.1f%%")
plt.title("Grade Distribution")
plt.show()


# Save chart as image
plt.figure(figsize=(8, 5))
plt.bar(df["Name"], df["Total"])
plt.title("Total Marks of Students")
plt.xlabel("Students")
plt.ylabel("Total Marks")
plt.savefig("student_chart.png")

print("Chart saved successfully as student_chart.png")