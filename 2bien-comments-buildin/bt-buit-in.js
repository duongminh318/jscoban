var a = alert("Hello World!");

console.log(a); // underfined

var b = confirm("Xác nhận!");

console.log(b); // true/false

var c = prompt("Nhập 1 số: ");

console.log(c);
console.log(typeof c);

setTimeout(function () {
    alert("123");
}, 1000);

setInterval(function () {
    alert("456");
}, 1000);