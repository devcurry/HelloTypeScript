var Greeter = (function () {
    function Greeter(element, button) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.button = button;
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        this.button.onclick = function () {
            alert("you clicked on the button");
        };
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerText = new Date().toUTCString();
        }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var button1 = document.getElementById('Button1');
    var greeter = new Greeter(el, button1);
    greeter.start();
};
