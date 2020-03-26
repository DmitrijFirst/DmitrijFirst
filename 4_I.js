//Interface segragation principle (Принцип сегрегации интерфейса)
/*Те классы которые  наследуются от базового класса , если они не используют 
методы базового класса, они не должны от них зависить 
*/


/*


Ошибочная реализация

//Абстрактный базовый класс
class Animal {
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`${this.name} умеет ходить`)
    }

    swim(){
        console.log(console.log(`${this.name} умеет плавать`))
    }

    fly(){
        console.log(console.log(`${this.name} умеет летать`))
    }
}

class Dog extends Animal {
    fly(){
        return null;
    }
}

class Eagle extends Animal {
    swim(){
        return null;
    }
    
}

class Whale extends Animal {
    fly(){
        return null;
    }
    whale(){
        return null;
    }
    
}

const dog = new Dog('Рекс');
dog.walk();
dog.swim();
dog.fly();

const eagle = new Eagle('Orel');
eagle.walk();
eagle.swim();
eagle.fly();

const whale = new Whale('Orel');
whale.walk();
whale.swim();
whale.fly()

*/


//Правильная реализация

//В базовом классе не описываем реализацию методов 
class Animal {
    constructor(name){
        this.name = name;
    }
}

const swimmer = {
    swim(){
        console.log(console.log(`${this.name} умеет плавать`))
    }
}

const flier = {
    fly(){
        console.log(console.log(`${this.name} умеет летать`))
    }
}

const walker = {
    walk(){
        console.log(`${this.name} умеет ходить`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Рекс');
dog.walk();
dog.swim();
//dog.fly();

const eagle = new Eagle('Orel');
eagle.walk();
//eagle.swim();
eagle.fly();

const whale = new Whale('Orel');
//whale.walk();
whale.swim();
//whale.fly()

/*
Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств 
из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
*/