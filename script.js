let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${1000}`;
    body.appendChild(tmp);
});
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${500}`;
    body.appendChild(tmp);
});
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${100}`;
    body.appendChild(tmp);
});
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${2390}`;
    body.appendChild(tmp);
});
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${0.01}`;
    body.appendChild(tmp);
});
let btn6= document.getElementById("btn6");
btn6.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${404}`;
    body.appendChild(tmp);
});