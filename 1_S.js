//Single Responsibility Principle (Принцип единой ответственности)

/* Класс News отвечает единой ответсвенности только получаем новости  */

class News {
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text){
        this.text = text;
        this.modified = true;
    }

    /*Расширять класс News ошибка, не соответсвие принципу Single Responsibility Principle, для этих целей создан  класс NewsPrinter*/

    /*

    toHTML(){
        return `
            <div class="news">
                <h1>this.title</h1>
                <p>this.text</p>
            </div>
        `
    }*/
}

/* Класс NewsPrinter отвечает единой ответсвенности только отвечает за вывод информации, 
класс можно расширять методами различных форматов отображения
*/

class NewsPrinter {
    constructor(news){
        this.news = news;
    }

    html(){
        return `
        <div class="news">
            <h1>this.news.title</h1>
            <p>this.news.text</p>
        </div>
    `
    }

    json(){
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text
        }, null , 2)
    }

    xml(){
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
}

const printer = new NewsPrinter(new News('Коронавирус', 'Мир заполонила эпидемия, люди выживают как могут'))
//const news = new News('Коронавирус', 'Мир заполонила эпидемия, люди выживают как могут');

console.log(printer.json())
console.log(printer.html())
console.log(printer.xml())