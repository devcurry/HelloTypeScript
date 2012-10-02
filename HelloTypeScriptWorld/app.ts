class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    button: HTMLElement;

    constructor (element: HTMLElement, button: HTMLElement) {

        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.button = button;
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        this.button.onclick = function () {
            alert("you clicked on the button");
        }
    }
    start() {
        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
    }
    stop() {
        clearTimeout(this.timerToken);
    }
}


window.onload = () => {
    var el = document.getElementById('content');
    var button1 = document.getElementById('Button1');
    var greeter = new Greeter(el, button1);
    greeter.start();
};