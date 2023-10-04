let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let tmp = document.createElement("p");
    tmp.innerHTML = `${Math.random() * 1000}`;
    body.appendChild(tmp);
});