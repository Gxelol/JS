const elements = [
    {tag: 'p', text: 'one'},
    {tag: 'div', text: 'two'},
    {tag: 'footer', text: 'three'},
    {tag: 'section', text: 'four'}
];

const section = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let {tag, text} = elements[i];
    let createTag = document.createElement(tag);

    // createTag.innerHTML = text; //first way of putting text
    // createTag.innerText = text; //second way of putting text

    let createdText = document.createTextNode(text); //
    createTag.appendChild(createdText);              // //third way of putting text
    
    div.appendChild(createTag);
}

section.appendChild(div);