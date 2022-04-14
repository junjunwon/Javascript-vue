function doSth(add2){ //함수를 파라미터로 받아올 수 있다. 
    const result=add2(1,2);
    console.log(result);
}

function add(a,b){
    const sum = a+b;
    return sum;
}

const addFun = add;
addFun(1,2);
doSth(add);         