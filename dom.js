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
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
//items[1].textContent = 'hello';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';

items[2].style.backgroundColor = 'green';