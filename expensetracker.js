
function showExpenditure(event)
{
    event.preventDefault();
    const amount =  event.target.expAmount.value;
    const expDesc =  event.target.Description.value; 
    const expCate =  event.target.categoryDetails.value;
    

//const amount = document.getElementById("quantity").value;
//localStorage.setItem("expenditure-amount",amount);
//const expDesc = document.getElementById("description").value;
//localStorage.setItem("expenditure-decription",expDesc);
//const category = document.getElementsById("categories").value;
//localStorage.setItem("categories",expCate);

const obj = {
    amount,
    expDesc,
    expCate
}
//store in local storage
localStorage.setItem(obj.amount,JSON.stringify(obj))
showExpDetails(obj)

}
// show on the screen
function showExpDetails(obj){
    const parentElem = document.getElementById('listOfExpenditures');
    const childElem = document.createElement('li');
    childElem.textContent = obj.amount + "-" + obj.expDesc + "-" + obj.expCate ;

    // delete user details
    const deleteBtn = document.createElement("input");

    deleteBtn.type = "button";

    deleteBtn.value ="DeleteExpense";

    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);
    }

    // edit user details 

    const editBtn = document.createElement('input');

    editBtn.type = "button";

    editBtn.value = 'EditExpense';

    editBtn.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);

        document.getElementById('quant').value = obj.amount;
        document.getElementById('descrip').value = obj.expDesc;
        document.getElementsById('cate').value = obj.expCate;
    }

    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
}