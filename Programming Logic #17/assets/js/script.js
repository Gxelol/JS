const paragraph = document.querySelector('.paragraph');
const allP = paragraph.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundBody = styleBody.background;

for (let p of allP) {
   p.style.background = 'var(--main-color)';
   p.style.color = '#fff'; 
}