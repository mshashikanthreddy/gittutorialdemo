function orderFood(event){
    event.preventDefault();

    const cost = event.target.itemprice.value;
    const recipe = event.target.itemname.value;
    const seat = event.target.tablename.value;

    const myList = {
        cost,
        recipe,
        seat
    }
    
    postOnCrudCrud();


    async function postOnCrudCrud () {
        try{
         const response = await axios.post("https://crudcrud.com/api/e112ec0d0dab41669f73b35d893f5b35/bookingOrder",myList)
            showListOnScreen(response.data);
        }
        catch(error) {
            console.log(error);
        }
    }
}

    window.addEventListener("DOMContentLoaded" , async() => {
        try {
        const response = await axios.get("https://crudcrud.com/api/e112ec0d0dab41669f73b35d893f5b35/bookingOrder")
            response.data.forEach((element) => {
                showListOnScreen(element);
            });
        }
        catch(err) {
            console.log(err);
        }
        
    })

    function showListOnScreen(userList){

        const parentElement = document.getElementById(`${userList.seat}`);

        const childElement = `<li id=${userList._id}><i> '${userList.cost}'-'${userList.recipe}'-'${userList.seat}' <i>
                                <button class="deletebutton btn-primary btn-sm" onclick=deleteUser('${userList.seat}','${userList._id}')>Delete Order</button></li>`

        parentElement.innerHTML += childElement;
    }

    async function deleteUser(tablenumber,userid){
        try {
        const response = await axios.delete(`https://crudcrud.com/api/e112ec0d0dab41669f73b35d893f5b35/bookingOrder/${userid}`)
            removeOnDisplay(tablenumber,userid);
        }
         catch(err) {
        console.log(err);
    }
    }
    function removeOnDisplay(tablenumber,userid){

        const parentEle = document.getElementById(tablenumber);
        const childEle = document.getElementById(userid);

        parentEle.removeChild(childEle);
    }

