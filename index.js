let mylist = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn= document.getElementById("savetab-btn")

const localStorageList = JSON.parse(localStorage.getItem("mylist"))

if (localStorageList) {
    mylist = localStorageList
    render(mylist)
}

tabBtn.addEventListener("click", function() {
    chrome.tab.query({active: true, currentWindow: true}, function(tabs){
        mylist.push(tabs[0].URL)
        localStorage.setItem("mylist", JSON.stringify(mylist))
        render(mylist)
    })
})

function render(lista){
    let listItems = ""

    for ( let i =0; i < lista.length; i++) {
        listItems+=`
        <li>
        <a target="_blank" href="${lista[i]}"> ${lista[i]} </a>
        </li>`
        //listItems +="<li>" + mylist[i] + "</li>"
        //const li = document.createElement("li")
        //li.textContent = mylist[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    mylist = []
    render(mylist)
})

saveBtn.addEventListener("click", function() {
    mylist.push(inputEl.value)
    inputEl.value= ""
    localStorage.setItem("mylist", JSON.stringify(mylist))
    render(mylist)
})