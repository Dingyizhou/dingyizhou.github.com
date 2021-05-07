var li = document.querySelectorAll('li');
for (i = 0; i < 8; i++) {
    var item = li[i];
    item.addEventListener('click', showAlart);
}

function showAlart(item) {
    alert(item.target.innerHTML);
}

li[0].onclick = function () {
    document.getElementById("p1").style.color = "red";
    document.getElementById("p1").setAttribute
}

li[1].onclick = function () {
    var date = new Date;
    var mouth = date.getMonth() + 1;
    document.querySelector("h1").innerHTML = date.getFullYear() + "-" + mouth + "-" + date.getDate();
}

li[2].onclick = function () {
    li[2].classList.add("fn-active");
};

li[3].onclick = function () {
    document.querySelector("ul").removeChild(li[7]);
};

li[4].onclick = function () {
    window.open("https://www.taobao.com/");
};

li[5].onclick = function () {
    p9 = document.createElement("li");
    document.querySelector("ul").appendChild(p9);
    p9.innerHTML = "p9";
    p9.classList.add('m-item');
    p9.addEventListener('click', showAlart);
};

li[6].onclick = function () {
    document.querySelector(".m-box").style.width = screen.availWidth;
};
