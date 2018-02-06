//Using TDD, (wherein you write tests BEFORE your function), write a function that returns an array of the first and last element in an array of integers.
var emptyArray = [];


function array(notN){ 
    emptyArray.push(notN[0]);
    emptyArray.push(notN[notN.length - 1]); 
    return emptyArray;
}



if (array([1,2,10])[0] == 1){
    console.log("pass1");

}
else {
    console.log("fail1");
}
if (array([1,2,3])[2] == 3) {
    console.log("pass2");
} else {
    console.log("fail2");
}

if (array([1,4,10])[1] == 4) {
    console.log("pass3");
} else {
    console.log("fail3");
}

if (array([1,2,4,5,6]) == [1,6]) {
    console.log("PASS4");
} else {
    console.log("FAIL4");
}
//console.log(array("123"[2]));