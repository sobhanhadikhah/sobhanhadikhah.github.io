
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
            var xen =  document.write(x+"  ???????????? ????  "+p+"??????????"+"<br>");
            arr.push(x+"  ???????????? ????  ");
            
            

        }
        document.write("???????? ??????  ?????? ????."+"<br>" );

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
        *
        var usernamesfade = [
            {
                nmaeo:"sina",
                fade:"you are chosen one..."
            },
            {
                nmaeo:"aria",
                fade: "remember who you are..."
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
        var wakeh1 = document.getElementById("yek");
        var usss = prompt("enter user");
        var passman = prompt("enter pass");
        var koni = false;
        function kos(user,pass){
            for (var i = 0; i < valuuser.length ; i++) {
                if (user===valuuser[i].usernmae&&pass===valuuser[i].pass) {
                    
                return true
                }
                
                
                
            }
            return false;

        };

        function asli(user,pass) {
            var x =kos(usss,passman);
            if (x===true) {
                alert("welcome to matrix user "+usss);
                    usernamesfade.forEach((arr,io) => {
                        wakeh1.innerHTML = "wake up " + usss +"..." ;
                        document.write(arr.nmaeo+"<br>"+"("+arr.fade+")"+"<br>");
                    });

            }else{
                
                
            var pop =   confirm("something wrong wants try agine?");
                
            }
            
        }
        asli(usss,passman);*/
        var listofuser = [
            {
                usernmae: "sobhan",
                paswword: "123"
            },
            {
                usernmae: "sali",
                paswword: "1234"
            },
            {
                usernmae: "parsa",
                paswword: "12345"
            },
        ];
        var listoffaade = [
            {
                user:"matin",
                fade:"hi dude"
            },
            {
                user:"iraj",
                fade:"salam"

            },
            {
                user:"samanta",
                fade:"im am robot"
            }
            
        ];
        /*
        function signin() {
            var getu = prompt("enter username:");
            var getp = prompt("enter password:");
            function bet(user,pass) {
                for (let index = 0; index < listofuser.length; index++) {
                    if (user===listofuser[index].usernmae&&pass===listofuser[index].paswword) {
                        return true;   
                        
                    }
                    return false;
                    
                }
                
            }

            
            function torf() {
                var nodep = document.createElement("p"); 
                if (bet(getu,getp)===true) {
                        listoffaade.forEach(fades  => {
                            var btn = document.createElement("p");  
                            btn.innerHTML = "<br>"+fades.user+"<br>"+fades.fade+"<hr>"  
                            document.body.appendChild(btn);                
                            
                            
                        });
                }else{
                    alert("wrong");
                }
                
            }
            torf();
        }
        *

        function signin(){

            var getuser = prompt("username:");
            var getpass = prompt("password");
            for (let i = 0; i < listofuser.length; i++) {
                    if (getuser===listofuser[i].usernmae&&getpass===listofuser[i].paswword) {
                        var hj =  listofuser[i].usernmae 
                        return true;
                        
                    }
                    
                
            }
            return false;

            

        }
        var textwake = document.getElementById("yek");
        var btnsig = document.getElementById("lok");
        function getitsignin(){
            var elemttruyafale = signin();
            if(elemttruyafale===true ){
                    
                    listoffaade.forEach((fades) => {
                    var textp = document.createElement("p");
                    textp.innerHTML = "<hr>" + "<br>" + fades.user +"<br>"+ fades.fade  +"<br>" + "<hr>";
                    document.body.appendChild(textp);
                    btnsig.remove();
                    textwake.innerHTML = "wake up...";
                });
                
            }else {
                var opp = confirm("your password or username is wrong, try agine ?");
                if(opp===true){
                    getitsignin();
                }else{ 

                }
                
            }
        }
        var x = document.createElement("p");
        x.innerHTML = "wants to you ";

        */
        var useroncenav = false;
        var trueorfalsehome = false;
        var homebtnmmm = document.getElementById("homebtnnav");
        var lsuserdiv = document.getElementById("listofuser");
        var divh1 = document.getElementById("h1opening");
        sigmatext = document.getElementById("sigin");        
        var wrongalert = document.getElementById("tellwrong");
        var databaseuseras = [
            {   
                 usera:"shomplex",
                passwordd:"123mos"
            },
            {
                usera:"sobhan",
                passwordd:"a123"
            },
            {
                usera:"saman007",
                passwordd:"saman12345678"
            },
            {
                usera:"sepanta",
                passwordd:"boypussylover"
            },
            {
                usera:"sali",
                passwordd:"witcher007"
            }
        ];

        var out = document.getElementById("outs");
        function removesins() {
            out.remove();
        };


        var divpu = document.getElementById("pusers");

        function getelemnts() {
            //for get the checkbox//
            xoxo = document.querySelector('#checkboxagree').checked;
            // value for get inputs and without var for use in any function //        
            getuser = document.getElementById("usernmameinput").value;
            getpass = document.getElementById("passsinput").value;
            for (let i = 0; i < databaseuseras.length; i++) {
                if (getuser===databaseuseras[i].usera&&
                    getpass===databaseuseras[i].passwordd&&xoxo ===true) {
                    return true;
                    
                }
                
            }
            return false;
        };
        var siuptext = document.getElementById("sigup");
        var btnsubmit = document.getElementById("btnsub");
        // add events listener for click some item without method in html //
        btnsubmit.addEventListener("click", (e) => {
            e.preventDefault();
            if (getelemnts()===true) {
                            
                    starttru();

                    
            }else{
                wrongalert.innerHTML = "somthing wrong";
                // for add class css in any item
                wrongalert.classList.add("apply-shake");
                wrongalert.addEventListener("animationend", (e) => {
                    // for remove any item
                wrongalert.classList.remove("apply-shake");
                    
                });
            }
        });
        
        function starttru() {
            var homebtn = document.getElementById("home");
                        homebtn.addEventListener('click',()=>{
                            if (trueorfalsehome===false) {
                                useroncenav = false ;
                                trueorfalsehome = true;
                                imagel.classList.add("hidden");
                                var psshowhome = document.createElement("p");
                                psshowhome.innerHTML = "sins";
                                psshowhome.classList.add('homenavb');
                                homebtnmmm.appendChild(psshowhome);
                                lsuserdiv.classList.add("hidden");
                                
                            }
                            
                        });
            
            var uersnavbarbtn = document.getElementById("usersnav");
            function oilme() {
                for (let iof = 0; iof < databaseuseras.length; iof++) {
                    imagel.classList.add("hidden");
                    var printusers = document.createElement("p");                    
                    lsuserdiv.appendChild(printusers);
                    printusers.classList.add('centeral','fadeinclsss');
                    printusers.innerHTML = (iof+1)+"-"+"user"+":"+databaseuseras[iof].usera;
                    
                    
                }    
            }
            
                    uersnavbarbtn.addEventListener('click',()=>{
                        
                        if (useroncenav===false) {
                            trueorfalsehome = false;
                            useroncenav = true;
                            
                            oilme(); 
                    

                        }
                        
                        
                        
                    });
                    
                        
            // remove with () for removing item//
            out.remove();            
            wrongalert.innerHTML = null;
            siuptext.remove();
            
            localStorage.setItem('setgetuser',getuser);
            var opengetuser = localStorage.getItem('setgetuser');
            sigmatext.innerHTML = opengetuser ;
            var h1show = document.createElement("h1");
            
            
            var texth1 = document.createTextNode("wake up "+getuser+"...");
            h1show.appendChild(texth1);
            
            divh1.appendChild(h1show);
            h1show.classList.add('fadeinclsss');
            var imagel = document.createElement("img");
            imagel.src = 'pppp.png';
            imagel.classList.add('fadeinclsss');
        
            divh1.appendChild(imagel);
            
            // 1 for only work once a click in js we use method flag with use var false
            var settruefales = false;
            imagel.addEventListener('click',showingthemm =>{

                function showingthemm() {
                    // whene a var is false start and ifter its uset once change var to true it just do it once
                    if (!settruefales) {
                        settruefales = true;
                        var matrixyou = document.createElement("h1");
                    matrixyou.innerHTML = "The Matrix Has you...";
                    matrixyou.classList.add('fadeinclsss');
                    divh1.appendChild(matrixyou);
                   
                    }
                    
                        
                }
                showingthemm();
                
                
            
            })

            

            //document.getElementsByTagName("body")[0].appendChild(divh1);
        } 
        
        
      
        
        

        
        //starttru();

