// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.


class Account {
    constructor(logininfo) {
    this.logininfo = logininfo
}
getInfo() {
    return ` Your login is ${this.logininfo.login} and your email is ${this.logininfo.email}`;
}
}
let info = {
    login:"Poly",
    email:"poly@mail.com"
}

let poly = new Account(info);

console.log(poly.getInfo());