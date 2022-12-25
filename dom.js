let itemList=document.querySelector("#items")
console.log(itemList.parentElement)
itemList.parentElement.style.backgroudColor="yellow"
console.log(itemList.children)
itemList.children.style.backgroundColor="green"
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent="Hello 1"
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent="Helllo 4"
itemList.lastElementChild.style.color="coral"
console.log(itemList.nextElementSibling)
itemList.nextElementSibling.style.color="blue"
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.backgroundColor="red"

let newDiv=document.createElement('div')
newDiv.className="Hello"
newDiv.id="Hello 1"
newDiv.setAttribute("Title","Hello 2")

let newDivText = document.createTestNode("Hello World")
newDiv.appendChild(newDivText)
let container=document.querySelector("header .container")
let h1 = document.querySelector("header h1")
console.log(newDiv)
newDiv.style.fontSize="30px"
container.insertBefore(newDiv , h1)