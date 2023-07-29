// EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title = "itemList";//
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.forms);
//console.log(document.links);

// GETELEMENTBYID // 
//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'goodbye';
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = "solid 3px #000";

//
//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'hello';
//items[0].style.fontWeight = 'bold';
//items[1].style.fontWeight = 'bold';
//items[2].style.fontWeight = 'bold';
//items[3].style.fontWeight = 'bold';

/*for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}*/

//items[2].style.backgroundColor = 'green';

// GETELEMENTTAGLINE

//let li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].style.backgroundColor = 'skyblue';

//for(let i=0;i<li.length;i++)
//{
//  li[i].style.backgroundColor = 'skyblue';
//}

// QUERYSELECTOR //

/*let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Enter Item';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

//let lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';//

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green'; 

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';*/

//TRANVERSING THE DOM //

let itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "#f4f4f4";
//console.log(itemList.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = "#f4f4f4";
//console.log(itemList.parentElement.parentElement);

// childNode
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);

//firstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);

// createElement

// create a div
let newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hi hello';

//add attribute
newDiv.setAttribute('title','hello div');

// create textNode
let newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header.container');
let h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv,h1);


 