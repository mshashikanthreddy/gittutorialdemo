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

let header = document.querySelector('#main-header');
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
thirdItem.style.display = 'none';





