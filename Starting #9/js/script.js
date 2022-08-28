function starting() {
    const form = document.querySelector(`.form`);
    const answer = document.querySelector(`.answer`);

    const people = [];

    function receiveForm(event) {
        event.preventDefault();

        const nameClient = form.querySelector('.name');
        const surnameClient = form.querySelector('.surname');
        const weightClient = form.querySelector('.weight');
        const heightClient = form.querySelector('.height');

        people.push({
            nameClient: nameClient.value,
            surnameClient: surnameClient.value,
            weightClient: weightClient.value,
            heightClient: heightClient.value
        })

        console.log(people);

        answer.innerHTML += `<p>${nameClient.value} ${surnameClient.value} ${weightClient.value} ${heightClient.value}</p>`;
        }

    form.addEventListener('submit', receiveForm);
}

starting();


