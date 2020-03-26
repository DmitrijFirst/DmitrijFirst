//Open Close Princeple (Принцип Открытого Закрытия)

/*Говорит о том, что классы должны быть открыты для расширения , но закрыты для модификации.*/

/*Для соблюдения принципа OCP  создаем базовый класс Shape*/

class Shape{
    area() {
        throw new Error('Area method should be implemented') //Если в дочерних классах не реалезован метод, выбрасывем ошибку
    }
}




class Square extends Shape{
    constructor(size){
        super();
        //this.type = 'square'; Типы уже не нужны
        this.size = size;
    }

    area(){
        return this.size ** 2 
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        //this.type = 'circle';
        this.radius = radius;
    }

    area(){
        return (this.radius ** 2) *  Math.PI
    }
}

/*Нарушение принципа OCP , так как калькулятор AreaCalculate, не знает как работать с прямоугольниками и нужно менять AreaCalculate.
Если появится 1000 фигур, то под каждую фигуру, нужно расширять AreaCalculate.

*/
class Rect extends Shape{
    constructor(width,height){
        //this.type = 'rect'
        super();
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

/*Калькулятор считает площадь */
/*Закрыт для изменения  */
class AreaCalculate {
    constructor(shapes = []){
        this.shapes = shapes;
    }

    sum(){
        return this.shapes.reduce((acc, shape) => {

            acc += shape.area();

            /* 
            if(shape.type === 'circle'){
                acc += (shape.radius ** 2) *  Math.PI
            } else if (shape.type === 'square') {
                acc += shape.size ** 2
            }
*/
            return acc
        }, 0)
    
    }
}

/*Открыт для модификации */
const calc = new AreaCalculate([
    new Square(10),
    new Circle(1),
    new Square(8),
    new Circle(3),
    new Rect(2,3)
])

console.log(calc.sum())