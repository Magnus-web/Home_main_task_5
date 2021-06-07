// Задание 2
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

function User(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
}

User.prototype.getInfo = function() { 
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
}

let poly = new User('Poly',3,17);

console.log(poly.getInfo());