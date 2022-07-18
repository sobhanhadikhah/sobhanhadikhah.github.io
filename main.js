
/**var userface = [
    {
        name:"sobhan",
        pass: "123"


    },{
        name: "ali",
        pass:"fsdjfh"
    }
];
var newfade = [
    {
        usernameof:"sinakr",
        fade:"be nazar mn ke kosshere gofti baz khod dani"
},{
    usernameof:"sinakr",
        fade:"be nazar mn ke kosshere gofti baz khod dani"
}



];
var buf = " ";
//var getuser = prompt("enter user");
//var getpass = prompt("enter pass");
function signinfun(user,pass) {
    
    if (user===userface[0].name&&pass===userface[0].pass) {
        alert("welcome"+buf+user+buf+"to website");
        console.log(newfade);
        
    }else{
        alert("sorry you pas or user are wrong")
    }
    
};
var newfun = function () {
alert("hey dud");
    
};

function nameop(user) {
    alert(user);
    
}
var  userme = "soabhan";
//nameop(userme);
//signinfun(getuser,getpass);

function hiudu() {

alert("hellow");
}
let fun2 = hiudu;

//--------------------------------//
var txt =  document.getElementById("hey");
var nameofma = [{
    name: "ali",
    usernameo : "ali123",
    age:"19"
},{
    name: "p[op"
}
];
txt.innerHTML = nameofma[0].name + buf + nameofma[0].age ;
var jk = document.getElementById("lok");
jk.innerHTML = nameofma[1].name;
var iojkh1 = document.getElementById("yek");
function lolo(name) {
    var name = prompt("BEDO");    
    iojkh1.innerHTML = name;
    
}

let poorguy = null ;
//lolo(poorguy);

/*var poding =  parseInt(prompt("yechi bezan"));
switch (poding) {
    case 0:
        alert(poding);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert(poding+buf+"is your number");
        break;
    default:
        alert("nadidam");
        break;
};*/
/*
var notpad = ["defult",
                "simba",
                "arteshi",
                "sound",
                "sound",
                "sound",
                "sound",
                "sound",
                "sound",
                "sound",
];
var finallenyh = notpad.length;

*/
/*login
var but = document.getElementById("lok"); 
var pony = document.getElementById("yek");
var getusermoas = prompt("user");
var getpass = prompt("pass");
var inputa = {
    name:getusermoas ,
    password:getpass
};
function onclickbutton() {
    var yank = true;
        var useuser = prompt("enter user");
        var usepass = prompt("enter pass");
        
        if(inputa.name===useuser&&inputa.password===usepass){
            
            
            var yank = true;
            alert("welcome"+" "+useuser);
            pony.innerHTML = "welcome"+" "+useuser;
            but.remove();
        }else{

            if (confirm("wrong whant do it again")===true) {
                                onclickbutton();
                
            }
        }
}
    
*/
/*
var arr = [null];
var p = 800;
while (p>=0) {
    var x = prompt("enter pay from "+p);
    var p = p-x;
    var xen =  document.write(x+"  پرداخت شد  "+p+"مانده"+"<br>");
    arr.push(x+"  پرداخت شد  ");
    
    

}
document.write("حساب شما  صاف شد."+"<br>" );

var pen =  document.write(arr);

*
var a = "mali";
var c = "m123";
var man = false
do {
    var x = prompt("user");
    var p = prompt("pass");
    if(a===x&&c===p){
        var man = true;
    }else{
        var man = false;
    }    
} while (man===false );
alert(x);
*
var nomreh = 9
for (let index = nomreh; index <=20; index++) {
    document.write("alan nomrat"+index+"<br>"+"ta 20 "+(20-index)+"<br>");
    
}*
var man = true;
var student = [];
do {
    var lunch = prompt("add name / for exit just type of it: ");
    student.push(lunch);
    if(lunch==="exit"){
        var man = false
        student.pop();
    }else{
        var man = true;
    }
} while (man===true);
student.forEach((nameof,index) => {
    document.write(index+1+" "+nameof+"<br>");    
} );
*/
var usernamesfade = [
    {
        nmae:"sina",
        fade:"to gavi"
    },
    {
        name:"aria",
        fade: "kos kharet"
    }
] ;
var valuuser = [
    {
        usernmae:"sali",
        pass:"123"
    },{
        usernmae:"sobhan",
        pass:"a1234"
    }
];
var usss = prompt("enter user");
var passman = prompt("enter pass");
var koni = null;
function kos(user,pass){
    for (var index = 0; index < valuuser.length ; index++) {
        if (user===valuuser[index].usernmae&&pass===valuuser[index].pass) {
            
            return true;
        }else{
             return false;
        }
        
        
    }

};
function asli() {
    if (kos(usss,passman)) {
        alert("yes")
    }else{
        alert("no");
    }
    
}
asli();