"use strict";

let jsonStr = `{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
}`;

let charInfo = JSON.parse(jsonStr);

let list = charInfo.list;

let charList = [];

list.forEach(element => {
    let char = {
        name: element.name,
        age: element.age,
        prof: element.prof
    };

    charList.push(char);
});

console.log(charList)