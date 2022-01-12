'use strict';
// Object-oriented programming
// class:template
// object:instance of a class
// Javascript classes
// -introduced in ES6
// -syntactical sugar over prototyped-based inheritance 

// 1.Class declarations
class Person{
    // constructor
    constructor(name,age){
        // fields
        this.name=name;
        this.age=age;
    }
    // methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}
const fubao=new Person('fubao',1);
console.log(fubao.name);
console.log(fubao.age);
fubao.speak();

// Getter and setters
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        // if (value<0){
        //     throw Error('age can not be negative');
        // }
        this._age=value<0?0:value;
    }
}
const user1=new User('Fubao','Baby',-1);
console.log(user1.age);

// 3. Fields(public,private)
// Too soon!
class Experiment{
    publicField=2;
    #privateField=0;
}
const experiment=new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

// 4.Static properties and methods 16:38
// Too soon!
class Article{
    static publisher='fubao';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1=new Article(1);
const article2=new Article(2);
console.log(Article.publisher);
Article.printPublisher();

class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return (this.width*this.height);
    }
}
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width*this.height)/2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}
const rectangle=new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle=new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6.Class checking:instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Tritangle); //true
console.log(triangle instanceof shape); //true
console.log(triangle instanceof Object); //true
console.log(triangle.toString());