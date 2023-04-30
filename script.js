let add_btns = document.getElementsByClassName("btn-primary");
let main_container = document.getElementsByTagName('tbody')[0]; //first element

for(let i = 0; i < add_btns.length;i++){
    add_btns[i].addEventListener('click', addToCart)
}
function addToCart(event){
    let btn = event.target
    let btn_parent = btn.parentElement
    let btn_grandparent = btn.parentElement.parentElement
    let itemName = btn_parent.children[0].innertext
    let itemPrice = btn_parent.children[1].innertext

    console.log(itemName)

    let itemContainer = document.createElement('tr')
    itemContainer.innerhtml = `<th scope="row"></th>
            <td><h4 class ="item-name">${itemName}</h4></td>
            <td><h4 class ="item-price">${itemPrice}</h4></td>
            <td><input type = 'number' class='num' value = '1'></td>
            <td><h4 class ="total-price">${itemPrice}</h4></td>
            <td><button class="remove-button" type="button">Remove</button></td>`

main_container.append(itemContainer)
}
