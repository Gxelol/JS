class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.on = false;
    }

    turnOn() {
        if(this.on) {
            console.log('Already on');
            return;
        }
        this.on = true;
    }

    turnOff() {
        if(!this.on) {
            console.log('Already off');
            return;
        }

        this.on = false;
    }
}

class Smartphone extends EletronicDevice{
    constructor (name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
}

class Computer extends EletronicDevice{
    constructor (name, screen, model) {
        super(name);
        this.screen = screen;
        this.model = model;
    }
}

const s1 = new Smartphone('Iphone', 'Rosè', '13 Pro Max');
s1.turnOn()
console.log(s1);

const c1 = new Computer('Asus', '4K', 'Dontkno-w');
c1.turnOn()
console.log(c1);
