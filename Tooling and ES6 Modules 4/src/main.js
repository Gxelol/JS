import GenerateCPF from "./modules/GenerateCPF";

import './assets/css/style.css';

(function(){
    const generate = new GenerateCPF();
    const result = document.querySelector('.result');
    result.innerHTML = generate.generateNewCpf();
})();