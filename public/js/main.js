let myH1 = document.querySelector('h1')

let test1 = () => {
    myH1.style.color = 'white'
    myH1.style.backgroundColor = 'red'
}

myH1.addEventListener('dblclick',test1)




let myH3 = document.querySelector('h3')

let test3 = () => {
    myH3.innerText = myH3.innerText.substring(0, myH3.innerText.length - 1)
}

myH3.addEventListener('mouseover', test3)





let myP = document.querySelector('p')

let i = 0
console.log(i % 2);

let test33 = () => {
    if (i % 2 == 0) {
        myP.style.cssText = "background-color:blue; color:gold"
        i++
    } else {
        myP.style = ""
        i++
    }
}

myP.addEventListener('click', test33)