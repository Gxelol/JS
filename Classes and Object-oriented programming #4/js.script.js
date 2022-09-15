class RemoteControl{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    turnUpVolume() {
        this.volume += 2;
    }

    turnDownVolume() {
        this.volume -= 2;
    }

    static change() {
        console.log("I couldn't find a method for the class RemoteControl, so change");
    }
}

const control = new RemoteControl('Samsung');
control.turnUpVolume();
control.turnUpVolume();
control.turnUpVolume();
RemoteControl.change();
console.log(control);