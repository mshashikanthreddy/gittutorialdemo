
// function registerUser(event){
//     event.preventDefault();

//     const pName = event.target.username.value;
//     const mailId = event.target.mail.value;
//     const phNo = event.target.phoneNo.value;

//     const obj1 = {
//         pName,
//         mailId,
//         phNo
//     }

//     axios.post("https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData",obj1)
//     .then((response) => {
//         showUserDetails(response.data)
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//     window.addEventListener("DOMContentLoaded", () => {
//         axios.get("https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData")
//         .then((response) => {
//             console.log(response);
//         for(let i=0;i<response.data.length;i++)
//         {
//              showUserDetails(response.data[i])
//         }})
//         .catch((err) => {
//             console.log(err);
//         })
//     })
//     //showUserDetails(obj1);
// }
// function showUserDetails(userData) {

//     document.getElementById('nametag').value = '';
//     document.getElementById('mailtag').value = '';
//     document.getElementById('numbertag').value = '';


//    const pNode = document.getElementById('listOfItems');
//    const cNode = document.createElement('li');
//    cNode.textContent = userData.pName + " -" + userData.mailId + " - " + userData.phNo ;
//    pNode.appendChild(cNode);
//   }






function registerUser(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.mail.value;
    const phonenumber = event.target.phoneNo.value;

    const obj = {
        name,
        email,
        phonenumber,
    }
    axios.post("https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData",obj)
    .then((response) => {
     showNewUserOnScreen(response.data)
          console.log(response);
    })
    .catch((err) =>{
        console.log(err); 
    })
    //showNewUserOnScreen(obj)

window.addEventListener("DOMContentLoaded", () => {
 axios.get("https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData")
      .then((response) =>{
         for( let i=0; i < response.data.length; i++){
             showNewUserOnScreen(response.data[i]);
             console.log(response);
      }})
      .catch((err) =>{
        console.log(err);  
      })
})
}
function showNewUserOnScreen(user){

 document.getElementById('mailid').value = '';
    document.getElementById('nameuser').value = '';
    document.getElementById('number').value ='';

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email} - ${user.phonenumber} 
                            <button class='deletbutton' onclick=deleteUser('${user._id}')> Delete User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;

    function deleteUser(userId){
        axios.delete(`https://crudcrud.com/api/488fff8800554fc693520229130f05f7/appoinmentData/${userId}`)
           .then((response) =>{
            removeUserFromScreen(userId);
           })
           .catch((err) =>{
            console.log(err);
           })
        }

        function removeUserFromScreen(userId){
            const parentNode = document.getElementById('listOfUsers');
            const childNodeToBeDeleted = document.getElementById(userId);
 
            parentNode.removeChild(childNodeToBeDeleted)
        }
}