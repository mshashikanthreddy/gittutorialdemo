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
window.addEventListener("DOMContentLoaded", () => {
axios.get("https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData",obj)
    .then(response => {
        
        for(var i=0;i<response.data.length;i++)
        {
            showNewUserOnScreen(response.data[i]);
        }
    })
    .catch(err => {
        console.log(err);
    })

//localStorage.setItem(obj.mail , JSON.stringify(obj))
//printOnScreen(obj)

})
}
function showNewUserOnScreen(user){
    
    const parentElem = document.getElementById('listOfItems')
    const childElem = document.createElement('li')
    childElem.textContent = user.name + " - " + user.mail + " - " + user.phoneNo ;
    parentElem.appendChild(childElem);

}

// function printOnScreen(obj)
// {
//     const parentElem = document.getElementById('listOfItems')
//     const childElem = document.createElement('li')
//     childElem.textContent = obj.name + " - " + obj.mail + " - " + obj.phoneNo ;

//     // delete button

//     const deleteBtn = document.createElement('input');

//     deleteBtn.type = "button";

//     deleteBtn.value = 'delete';   
    
//     deleteBtn.onclick = () => {

//         localStorage.removeItem(obj.mail);
//         parentElem.removeChild(childElem);
//     }

//     // edit button
//     const editBtn = document.createElement('input');

//     editBtn.type = "button";

//     editBtn.value = 'edit';  
//     editBtn.onclick = () => {

//         localStorage.removeItem(obj.mail);
//         parentElem.removeChild(childElem);
//         document.getElementById('nametag').value = obj.name;
//         document.getElementById('mailtag').value = obj.mail;
//         document.getElementById('numbertag').value = obj.phoneNo;


//     }
//     childElem.appendChild(deleteBtn);
//     childElem.appendChild(editBtn);
//     parentElem.appendChild(childElem);
//}