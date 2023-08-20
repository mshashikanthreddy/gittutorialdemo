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

    axios.post("https://crudcrud.com/api/ef4cfc06cf77446db309cddb21cc7617/bookingOrder",myList)
        .then((response) => {
            showListOnScreen(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    window.addEventListener("DOMContentLoaded" , () => {
        axios.get("https://crudcrud.com/api/ef4cfc06cf77446db309cddb21cc7617/bookingOrder")
            .then((response) => {
                for(let i=0;i<response.data.length;i++)
                {
                    showListOnScreen(response.data[i]);
                }
            })
    })

    function showListOnScreen(userList){

        const parentElement = document.getElementById(`${userList.seat}`);

        const childElement = `<li id=${userList._id}><i> '${userList.cost}'-'${userList.recipe}'-'${userList.seat}' <i>
                                <button class="deletebutton btn-primary" onclick=deleteUser('${userList.seat}','${userList._id}')>Delete Order</button></li>`

        parentElement.innerHTML += childElement;
    }

    function deleteUser(tablenumber,userid){

        axios.delete(`https://crudcrud.com/api/ef4cfc06cf77446db309cddb21cc7617/bookingOrder/${userid}`)
            .then((response) => {
                removeOnDisplay(tablenumber,userid);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    function removeOnDisplay(tablenumber,userid){

        const parentEle = document.getElementById(tablenumber);
        const childEle = document.getElementById(userid);

        parentEle.removeChild(childEle);
    }

