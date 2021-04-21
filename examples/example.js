var fpgrowth = require("../dist/fpgrowth");

var transactions = [
    [1, 3, 4],
    [2, 3, 5 ],
    [1, 2, 3, 5 ],
    [2, 5 , 7]
];

// Execute FPGrowth with a minimum support of 40%.
var fpgrowth = new fpgrowth.FPGrowth(0.4);
var support, items;
var benh = [3, 5 ,7,1];
var benh2 =[];
var max = 0 ;
console.log(`Executing FPGrowth...`);

function equar(a, b) {
    var arrar = [];
    if (a.length >= b.length) {
        for (let i=0; i< a.length; i++){
            for (let j=0; j< b.length; j++){
                if (a[i].toString() == b[j].toString()){
                    arrar.push(a[i].toString());
                    // console.log(a[i]);
                    // console.log(b[j]);
                    // console.log(arrar);
                }
            }
        }
    }else{
        for (let i=0; i< b.length; i++){
            for (let j=0; j< a.length; j++){
                if (b[i].toString() == a[j].toString()){
                    arrar.push(b[i].toString());
                    // console.log(a[i]);
                    // console.log(b[j]);
                    //console.log(arrar);
                }
            }
        }
    }
    // if (arrar.length == 0){
    //     return null;
    // }
    //console.log(arrar);
    return arrar;
    
};
//var s = equar(['1', '3','3'], ['1', '2']);
//console.log(s);  //  false

// var t = equar([1, 2, 3], [1, 2, 3]);
// console.log(t);  //  true


// Returns itemsets 'as soon as possible' through events.
fpgrowth.on('data', function (itemset) {
    
    support = itemset.support;
    items = itemset.items;
    var trieuchung = equar(items, benh);
    console.log(trieuchung.length);
    if (trieuchung.length >= max){
    //    // console.log("true");
        console.log(`Itemset { ${items.join(',')} } is frequent and have a support of ${support}`);
        max = trieuchung.length;
        benh2 = trieuchung;
    //     //console.log(itemset);
    }
    //console.log(`Itemset { ${items.join(',')} } is frequent and have a support of ${support}`);
    //console.log(items[0]);
});


// Execute FPGrowth on a given set of transactions.
// fpgrowth.exec(transactions)
//     .then(function (itemsets) {
//       console.log(itemsets);
      
//       console.log(`Finished executing FPGrowth. ${itemsets.length} frequent itemset(s) were found.`);
//   });

  fpgrowth.exec(transactions)
    .then(function (itemsets) {
    console.log(benh2);
      console.log(`Finished executing FPGrowth. ${itemsets.length} frequent itemset(s) were found.`);
  });