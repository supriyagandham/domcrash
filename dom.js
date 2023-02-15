//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.all[10]);
//document.all[10].textContent='hello';
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(main-header);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Hellow';
//console.log(headerTitle.textContent);
//headerTitle.innerHTML='<h3>Hai</h3>';
//header.style.borderBottom='solid 5px #000';
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent='Hello 2';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='skyblue';
//for(var i=0; i<items.length; i++)
//{
  //  items[i].style.backgroundColor='#f4f4f4';
//}
//GET ELEMENTS TAGNAME//
//var li=document.getElementsByTagName('li');
//console.log(li);
//li[1].textContent='Hello 2';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='skyblue';
//for(var i=0; i<li.length; i++)
//{
  //  li[i].style.backgroundColor='#f4f4f4';
//}
//QUERTSELECTOR//
//var header=document.querySelector('#main-header');
//header.style.boaderBottom='solid 1px #ccc';


//var input=document.querySelector('input');
//input.style.backgroundColor='pink';

//var submit=document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var item=document.querySelector('.list-group-item');
//item.style.color='red';
//item[1].style.color='blue';
//tem[2].style.color='rose';
//var lastitem=document.querySelector('.list-group-item:last-child');
//lastitem.style.color='pink';

//var titles=document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent='Hello';
//titles[0].style.color='violet';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');
//for(var i=0; i<odd.length; i++){
  //odd[i].style.backgroundColor='#f4f4f4';
  //even[i].style.backgroundColor='#ccc';
//}


// tranfor method//

//var itemList=document.querySelector('#items');

// parentNode //
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

// childNode
//console.log(itemList.childNodes);

//console.log(itemList.previousElementSibling);

// create a new element

// create a div

var newDiv=document.createElement('div');
//Add class
newDiv.className='Hello';

//Add id
newDiv.id='hai 1';

console.log(newDiv);