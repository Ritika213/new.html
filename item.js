var item=document.getElementsByClassName('list-group-item');
for(let a of item)
a.style.forntWeight='bold'
for(let b of item)
b.style.color='red'
item[2].style.backgroundColor='green'
console.log(item);