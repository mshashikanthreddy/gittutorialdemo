function checkItems(event) {

    event.preventDefault();

    const name = event.target.itemname.value;
    const description = event.target.itemtype.value;
    const cost = event.target.itemprice.value;
    const quantity = event.target.itemquantity.value;

    const myList = {

        name,
        description,
        cost,
        quantity
    }

    axios.post("https://crudcrud.com/api/3014436eecb44a0984d8a75a9e899d7c/groceryItems",myList)
        .then((response) => {

            showItemsOnScreen(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

    window.addEventListener('DOMContentLoaded' , () => {
        axios.get("https://crudcrud.com/api/3014436eecb44a0984d8a75a9e899d7c/groceryItems")
            .then((res) => {

                for(let i=0;i<res.data.length;i++)
                {
                    showItemsOnScreen(res.data[i]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    })

    function showItemsOnScreen(grocery){

        const parentElement = document.getElementById('listOfItems');
        const childElement = `<li id=${grocery._id}> ${grocery.name} , ${grocery.description} , ${grocery.cost} , ${grocery.quantity}
                                <button class="quantity1" onclick=updateQuantity('${grocery._id}','${grocery.quantity}','${1}','${grocery.name}','${grocery.description}','${grocery.cost}')>BUY1</button>
                                <button class="quantity2" onclick=updateQuantity('${grocery._id}','${grocery.quantity}','${2}','${grocery.name}','${grocery.description}','${grocery.cost}')>BUY2</button>
                                <button class="quantity3" onclick=updateQuantity('${grocery._id}','${grocery.quantity}','${3}','${grocery.name}','${grocery.description}','${grocery.cost}')>BUY3</button>
                             </li>`
        parentElement.innerHTML += childElement;
    }


    function updateQuantity(itemid,intialStock,stockUpdate,item,itemtype,amount){

        axios.put(`https://crudcrud.com/api/3014436eecb44a0984d8a75a9e899d7c/groceryItems/${itemid}`,{

            name : item,
            description : itemtype,
            cost : amount,
            quantity : intialStock - stockUpdate 

        })
        .then((response)=>{
            updateQuantityOnScreen(response.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    function updateQuantityOnScreen(editQuantity){

        const parentElement = document.getElementById('');
        parent.innerHtml = `${editQuantity.name}, ${editQuantity.description} , ${editQuantity.cost} , ${editQuantity.quantity}`;

    }