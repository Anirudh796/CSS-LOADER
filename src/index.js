import _ from "lodash";
import style from './index.css';
import "./clearButton";

console.log(style);

const btn1 = document.getElementById("button1");

btn1.addEventListener("click",function (){
    const e1 = document.getElementById("header");
    e1.innerHTML="Hey,I have updated the code";

    const listItems=["Apple","orange","Banana"];
    const ul = document.getElementById("shoppingList");
    listItems.forEach((item,index) => {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl)
    })
})

btn1.classList.add([style.button]);