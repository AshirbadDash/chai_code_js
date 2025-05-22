let score = "33abc"
let result = null
let demo = undefined
let ball=true
console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score) //NaN
console.log(typeof valueInNumber); //number
console.log(typeof result);  //object 0
console.log(typeof demo);// undefined
console.log(typeof ball); //boolean 




console.log(valueInNumber); //NaN
console.log(score); //33abc

//"33" => 33
//"33abc" => NaN
//"abc" => NaN
//"true" => 1; "false" => 0


//1 =>true; 0 => false
//""=>false
//"hitesh"=>true