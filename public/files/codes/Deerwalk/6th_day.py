# Inheritance


class Animal:
    def __init__(self):
        print("This animal eats food")


class Dog(Animal):
    def __init__(self):
        super().__init__()
        print("This dog barks")


dog = Dog()


# Polymorphism
class Esewa:
    def pay(self, amount):
        print(f"Paid Rs. {amount} using Esewa")


class Khalti:
    def pay(self, amount):
        print(f"Paid Rs. {amount} using Khalti")


class Bank:
    def pay(self, amount):
        print(f"Paid Rs. {amount} using Bank")


def make_payment(payment_method, amount):
    payment_method.pay(amount)


esewa = Esewa()
make_payment(esewa, 200)
khalti = Khalti()
make_payment(khalti, 2000)
bank = Bank()
make_payment(bank, 2000000)

# Bank object


class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def show_balance(self):
        return self.__balance
   
account = BankAccount(1000)
# print(account.__balance)
print(account.show_balance())

#Make functionality for depositing and withdrawing money
