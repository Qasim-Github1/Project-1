const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup",function(e){


if (e.key == "Enter"){

    AddToDo(item.value);
    item.value = "";
}

})

const AddToDo = (item) => {
    const ListItem = document.createElement("li");
    ListItem.innerHTML = `
    ${item}
    <i class="fas fa-times"> </i>
    `;
    ListItem.addEventListener("click",function(){
        this.classList.toggle("done");
    } )
    ListItem.querySelector("i").addEventListener("click",function(){
        ListItem.remove()
    })
    toDoBox.appendChild(ListItem)

} 