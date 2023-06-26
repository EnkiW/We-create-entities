class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.license = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log(`Власник повинен бути >= 18 років.`);
        }
    }

    displayInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номер: ${this.license}`);
        if (this.owner) {
            console.log(`Інформація власника:`);
            this.owner.displayInfo();
        } else {
            console.log(`Автомобіль без власника.`);
        }
    }
}
// Приклад виведення:
const person1 = new Person("Антон", 13);
const person2 = new Person("Глеб", 32);
const person3 = new Person("Лел", 18);
const car1 = new Car("Chevrolet", "Camaro", 2017, "AE5550DB");
const car2 = new Car("BMW", "x9", 2022, "AE4212ВЕ");
car1.assignOwner(person1);
car2.assignOwner(person2);
car1.assignOwner(person3);
car1.displayInfo();
car2.displayInfo();
