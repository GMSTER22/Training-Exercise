const firstLi = document.querySelector(".firstList");

const times = Math.ceil(firstLi.getAttribute("data-triangleSize"));
console.log( times)

for (let i = 0; i < times + 1 ; i++) {

    let li = document.createElement("li");
    
    for (let j = 0 ; j < i; j++) { 
        let span = document.createElement("span");
        span.textContent = "#"       
        li.appendChild(span);        
        // console.log(i , "#")
    }

    firstLi.appendChild(li)
}



 