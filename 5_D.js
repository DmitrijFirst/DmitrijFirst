//Dependency inversion princeple (Принцип зависимости инверсии )
/*
Верхний уровень модулей не должен зависить от абстракций нижнего уровня .
*/

class Fetch {
    request(url){
        //return fetch(url).then(r => r.json)
        return Promise.resolve('data from fetch')

    }
}


class LocalStorage {
    get(){
        const dataFromLocalStorage = 'data from local'
        return dataFromLocalStorage;
    }
}

//Создаем интерфейсы

class FetchCliend{
    constructor(){
        this.fetch = new Fetch()
    }

    clientGet(){
       return this.fetch.request('http://......')

    }
}


class  LocalStorageClient {
    constructor(){
        this.localStorage = new LocalStorage();
    }

    clientGet(key){
        return this.localStorage.get(key);

    }

}


class Database {
    constructor(client){
        this.client = client;
        
    }


    getData(key){
        return this.client.clientGet(key)
    }
}

//const db = new Database(new FetchCliend());
const db = new Database(new LocalStorageClient());
console.log(db.getData('test'))