let item = document.getElementsByClassName("list-group-item");
console.log(item);
console.log(item[1]);
item[1].textContent = "Hellow";
item[2].style.fontWeight = "bold";
item[2].style.backgroundColor = "green";

for(let i=0;i<item.length;i++)
{
    item[i].style.fontWeight = "bold";
}

