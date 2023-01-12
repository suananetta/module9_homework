"use strict";

let xmlStr = `
        <list>
            <student>
                <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
                </name>
                <age>35</age>
                <prof>teacher</prof>
            </student>
            <student>
                <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
                </name>
                <age>58</age>
                <prof>driver</prof>
            </student>
        </list>`;

let parser = new DOMParser();

let xmlDOM = parser.parseFromString(xmlStr, 'text/xml');

let studentsList = [];

let studentNode = xmlDOM.querySelectorAll('student');

studentNode.forEach( char => {
    let student = {
        name: char.querySelector('first').textContent + " " + char.querySelector('second').textContent, 
        age: Number(char.querySelector('age').textContent), 
        prof: char.querySelector('prof').textContent, 
        lang: char.querySelector('name').getAttribute('lang')};

    studentsList.push(student);

})

console.log('list', studentsList);
