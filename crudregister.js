function registerUser(event)
{
    event.preventDefault();
const name =  event.target.username.value;
const mail =  event.target.mail.value; 
const phoneNo =  event.target.phoneNo.value;


const obj = {
    name,
    mail,
    phoneNo

}
axios.post("https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData",obj)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

//localStorage.setItem(obj.mail , JSON.stringify(obj))
//printOnScreen(obj)
}


function printOnScreen(obj)
{
    const parentElem = document.getElementById('listOfItems')
    const childElem = document.createElement('li')
    childElem.textContent = obj.name + " - " + obj.mail + " - " + obj.phoneNo ;

    // delete button

    const deleteBtn = document.createElement('input');

    deleteBtn.type = "button";

    deleteBtn.value = 'delete';   
    
    deleteBtn.onclick = () => {

        localStorage.removeItem(obj.mail);
        parentElem.removeChild(childElem);
    }

    // edit button
    const editBtn = document.createElement('input');

    editBtn.type = "button";

    editBtn.value = 'edit';  
    editBtn.onclick = () => {

        localStorage.removeItem(obj.mail);
        parentElem.removeChild(childElem);
        document.getElementById('nametag').value = obj.name;
        document.getElementById('mailtag').value = obj.mail;
        document.getElementById('numbertag').value = obj.phoneNo;


    }
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
}