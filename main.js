menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                  "Pizza de Frango" ,
                "Pizza Portuguesa",
                "Pizza quatro queixos",
                "Pizza de Calabresa",
                "Pizza Extravaganza" ];

function getMenu(){
var htmldata ="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++)
{
htmldata=htmldata+ menuListArray[i] + "<br>"
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags= '<img id="img1" src="images/pizzaimg.png"/>';
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++) {
    htmldata=htmldata+imgtags+ menuListArray[i] + "<br>"
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;


}

function addTop(){
var iten=document.getElementById("addItem").value;
menuListArray.push(iten);
addItem();
}