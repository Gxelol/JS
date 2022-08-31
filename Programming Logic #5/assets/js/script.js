const formBMI = document.querySelector(`.form`);

function getBMI(weight, height) {
    const BMI = weight / height ** 2;
    return BMI.toFixed(2); 
}

formBMI.addEventListener('submit', function calc(e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');
    
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);
    
    if (height > 3) {
        height * 100;
    }

    if (!weight) {
        bodyMassResult('Invalid weight');
        return;
    }
    
    if (!height) {
        bodyMassResult('Invalid height');
        return;
    }
    
    const BMI = getBMI(weight, height);
    const bodyLevel = bodyMassLevel(BMI);
    
    const msg = `Your BMI is ${BMI} (${bodyLevel})`;

    bodyMassResult(msg);
});

function bodyMassLevel(BMI) {
    const level = ['Severe Thinness', 'Moderate Thinness', 'Mild Thinness', 'Normal', 'Overweight', 'Obese Class I', 'Obese Class II', 'Obese Class III'];
    
    if (BMI >= 40) return level[7];
    if (BMI >= 35) return level[6]; 
    if (BMI >= 30) return level[5];
    if (BMI >= 25) return level[4]; 
    if (BMI >= 18.5) return level[3];  
    if (BMI >= 17) return level[2]   
    if (BMI >= 16) return level[1];    
    if (BMI < 16) return level[0];
}

function createParagraph() {
    const p = document.createElement('p');
    return p;
}

function bodyMassResult (msg) {
    const result = document.querySelector(`.result`);
    result.innerHTML = '';
    const p = createParagraph();
    p.classList.add('paragraph-result');
    p.innerHTML += msg;
    result.appendChild(p)
}