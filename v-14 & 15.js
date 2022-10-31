//===== Object Basic concept======

// var billgates={shirt:true,shirtcolor:'offwhite',smile:true,swater:true,swatercolor:'gray',sunclass:true}
// console.log(billgates['swatercolor']);


//===== Object Nestad concept======

var billgatespro={
    shirt:{
        color:'White',
        Quality:'good',
        Price:'200USD',
    },

    Swatter:{
        color:'Gray',
        Quality:'best',
        Price:'300USD',
        warm:'best',     
    },

    face:{
        smilling:'yes',
        chosma:'yes',
        teeth:'white,big',
    },
}

console.log(billgatespro['Swatter']['Price']);