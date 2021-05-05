// Your code here
function saturdayFun(userInput="roller-skate") {
   return `This Saturday, I want to ${userInput}!`
}
const mondayWork = function (userWork="go to the office") {
    return `This Monday, I will ${userWork}.`
}
function wrapAdjective(first="*"){
    return function(second="special") {
        return `You are ${first}${second}${first}!`

    }
}

const Calculator = {
    Calculator : {},
    add: function(x, y){return x + y},
    subtract: function(x, y){return x - y},
    multiply: function(x, y){return x * y},
    divide: function(x, y){return x / y}

};


function multi1(x){
    return x*2 ;
};
function add1(x){
    return x + 1000;
}
function modulo1(x) {
    return x % 7;
}




let array1 = [multi1, add1, modulo1];

function actionApplyer(startInt, array) {
    let result = 0;
    
    if (array == 0 ){
        return startInt
    }
    else { for(let i=0;i<array.length;i++){ 
        result = array[i](startInt)
        
        startInt = result;  
        }
        
        return result
        
}

    
};
actionApplyer(13, array1);
