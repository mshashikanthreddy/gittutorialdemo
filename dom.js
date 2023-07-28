// EXAMINE THE DOCUMENT OBJECT //
console.dir(document);
console.log(document.URL);
console.log(document.title);
//document.title = "itemList";//
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);

// GETELEMENTBYID // 
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'goodbye';
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);
//headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = "solid 3px #000";
