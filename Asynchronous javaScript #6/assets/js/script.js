// fetch('people.json')
//     .then(answer => answer.json())
//     .then(json => loadElements(json));

axios('people.json')
.then(answer => loadElements(answer.data));


function loadElements(json) {
    const table = document.createElement('table');
    
    for (let person of json) {
        const tr = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerHTML = person.name;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = person.age;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = person.salary;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    
    const result = document.querySelector('.result');
    result.appendChild(table);
}