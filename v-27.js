//========== Object in loop=========

var shopingCard={

books:3,
sunglass:1,
keyboeard:2,
mouse:2,
pen:5,
shose:4,
}

for(propertyName in shopingCard){

//console.log(propertyName); // print propertyname....

var value=shopingCard[propertyName];

console.log(propertyName,value); // value with property name....

}