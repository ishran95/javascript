// 01 - Format //


// 02 - Age  //

function calculateAge(age) { 
    let diff = Date.now() - date.getdate();
    let age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}
console.log("calculateAge");
alert(getAge(new Date(1997, 12, 6))); //Date(année, mois, jour) 


