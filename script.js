var input = document.querySelector(".input-task")
var ul = document.querySelector("ul")


function completed() {
    this.nextSibling.classList.toggle('completed')
    this.parentNode.classList.toggle('done')
}


function AddList() {

    let val = input.value
    if (val === "") {
        console.log(val.length);
        window.alert('type something')

    }

    else if(val.length>40){
        window.alert('only 40 letters can be add')
    }

    else {

        var li = document.createElement('li')
        let checkbtn = document.createElement('button')
        checkbtn.setAttribute('class', 'Check-Btn')
        checkbtn.textContent = '✓'
        checkbtn.onclick = completed
        let cutbtn = document.createElement('button')
        cutbtn.textContent = 'X'
        cutbtn.onclick = function () {
            this.parentNode.remove();
        }
        let span = document.createElement("span")

        span.innerText = val;
        input.value = ""

        ul.appendChild(li)
        li.appendChild(checkbtn)
        li.appendChild(span)
        li.appendChild(cutbtn)
        console.log(val)

        checkbtn.classList.add("check-btn")
        cutbtn.classList.add("cut-btn")

        console.log(val.length);

    }

}


// checkbtn.onclick = function(){
//     this.nextSibling.classList.toggle('completed')
// }

