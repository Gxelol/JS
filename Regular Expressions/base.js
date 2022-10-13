// g - global (find all ocurrences)
//i - insensitive
// () - groups
// | - or 

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Loooooooooooooorem and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const files = [
  'hOME.jpg',
  'pleease.jpg',
  'kitten.JPEG',
  'kitten.JPG',
  'kitten.jpg',
  'badDog.jpeg',
  'Chui.png',
  'LIST.txt',
  'Piece of cake.txt',
  'Blend.png',
]

const cpf = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

const cpf2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `
Os Ips são:
   0.0.0.0
   192.168.0.25
        10.10.5.12
        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)
   255.255.255.255
`;
 
//            <tag>something</tag>   <tag> text </tag>
const html = ' <p>Hello world</p>   <p>Hello again</p> <div>I am the div</div>';
const html2 = ' <p class="test"> Hello world and sun </p> <div class="something"> Am I the div </div> <p>Hello again</p>'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 01234 56789';

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = {
  text,
  files,
  html,
  alphabet,
  cpf,
  ips,
  cpf2,
  html2,
  lookahead,
}