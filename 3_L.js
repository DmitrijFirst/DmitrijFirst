//Liskov substition principle (Принцип подстановки Лискова)
/*Функции которые используют базовый тип они должны уметь с ним взаимодействовать , плюс взаиодействовать
с подтипами данного базового типа, не зная ничего об этом
*/


/*Нарушает принцыпы , просто наследоваться от Person неправильно */

class Person {
    /*
    access(){
        console.log('У тебя есть доступ')
    }*/
}

/*Создаем новый уровень абстракции */

class Member extends Person{ //сотрудники компании
    access(){
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person{
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend(){}
}

class Backend extends Member {
    canCreateBeckend(){}
}
/*Некорректно работает с базовым классом */
class PersonFromDifferentCompany extends Guest {
    access(){
        console.log('У теья нет доступов! Иди в свою компанию')
    }
}




/*Для корректной работы нужно писать кучу if */
function openSequreDoor(member){
    member.access()
}

openSequreDoor(new Frontend);
openSequreDoor(new Backend);
openSequreDoor(new PersonFromDifferentCompany); //

//Необходимо правильно выбирать слои абстракции, все персоны сохранили "Человечность" от Persons
//Но у сотрудников есть доступы , а у гостя нет