/////////============ Output /////////============\
// alert("Hello programmes");    TEPADAN TUSHADIGAN
// document.write(" <h1> hello programmers");    brauzerga chqaradi
// console.log("hello")    brauzerga f12 bosganda kod yozadigan joyga chqaradi

///////// variables//////////
// var a ="gulya";
// var b = "guli";
// console.log(a + "ga" + "qoshsak" + b + "gulsevar")

// var b = 12;
// var c = 20;
// console.log(c/b)bolish

// var b = 12;
// var c = 20;
// console.log(c+b)

// var b = 12;
// var c = 20;
// console.log(c-b)
 
// var ketmon = "lapatka";

// var b = 12;
// var c = 24;
// var res = c+b;
// console.log(res);

// var l = "salom";
// var m = "hayir";

// console.log(l + " "  + m)

// var x = 4;
// x++ 
// ++x
// x--
// --x

// console.log(1 + ++x + x)  javobi11





//////////////////////=-=====data type========//////////////////////

//string//

//----  var        a = "salom"
//       ozgaruvci nom  qiymat  ----//

//console.log(typeof(a))      data tipni korsatb beradi f12da


//number//
//var b = 12;


//boolean//
//true//1//rost
//false//0//yolgon
//var a = true;
//var b = false;
//var w = a > b;//rost > yolgon

//console.log(w)

//null//
//sonam sozam yoq
//var x ="a"
//console.log(x++);

//underfined//
//var b
//console.log(b);

/////======================operatrlar====================////
// var a = 12;
// var b = 6;

// console.log(a > b)//true
// console.log(a < b)//false

// console.log(a <= b)//false
// console.log(a >= b)//true

// console.log(a == b)// false
//





///////////////=============operator2==============//////////////////

// var bool = false;

// var bool2 = bool;

// console.log(!bool)



// var bool = false;
// var bool2 = bool;

// console.log(!bool)


//===========or || operatori=======//qoshish
// var bool1 = true;
// var bool2 = false;
// console.log(bool1 || bool2)


//==========and &&=====//kopaytrsh
// var bool1 = true;
// var bool2 = false;
// console.log(bool1 || bool2)


///////////////////=================input
//+prompt = number
//prompt = string
// var sayHello = prompt("programmer")
// document.write(sayHello)
// document.write(typeof(sayHello))

////////////////======================= if else ==============///////////////

// var age = +prompt("you are")

// if(age === 54){
// console.log("siz togri")
// }
// else{
//     console.log("yosh xato")
// }


// var sayHello = +prompt("kiritin")
// var g = string
// if (sayHello = g){
//     document.write("string");
// }else{
//     document.write("number");
// }



// var forDays = +prompt("sanani krgizing:")

// if (forDays <= 10){
//     document.write("hali 10 kundan oshiq muddat bor")
// }else if (forDays <= 10 && forDays < 25){
// document.write("oz qoldi")
// }else if (forDays > 25){
//     document.write("bayrammmmmmm")
// }else if (forDays > 31 && forDays > 25){
//     document.write("tugadi")
// }else{
//     document.write("xatolik")
// }








//========================= Math

// console.log(Math.max(-1,2,6.9,8,0))//kotta sonni korsatadi
// console.log(Math.min(-1,2,6.9,8,0))//kicik sonni korsatadi

// console.log(Math.pow(2,3,3))//kvadratni cqaradi korsatadi
// console.log(Math.sqrt(81))//ildiz osti cqaradi 

// console.log(Math.floor(1.45))//yaxlitlamiy torisini korsatadi javob1
// console.log(Math.round(1.50))//yaxlitlaydi javob2
// console.log(Math.ceil(101.0))





/*====================================Random*/

// console.log(Math.floor(Math.random () *101) + 1);






// var students = [
//     "Husan",
//     "Kamron",
//     "Otabek",
//     "Anvar",
//     "Husniddin",
//     "Ziyoda",
//     "Gulsevar"
// ]
// console.log(students.length[Math.floor(Math.random() *7 ) ])
// document.write(students.length[Math.floor(Math.random() *7 ) ])




// var students = [ "Husan",
// "Kamron",
// "Otabek",
// "Anvar",
// "Husniddin",
// "Ziyoda",
// "Gulsevar"
// ]
   

// console.log(students[Math.floor(Math.random() *7 ) ])
// document.write(students[Math.floor(Math.random () *7 ) ])



// var a = 1+1

// console.log(typeof(a))


   

/////////////======qoshish naluboy sonni kritganda javob chqadi=====//////////

// var g = prompt("son kritin");
// var b = prompt("amalni kritin")
// var d = prompt("ikinci son")

// var s = eval(g + b + d) 
// document.write(s)







//////////////=============kalkulator===================///////////////

// var num1 = +prompt('Birinchi sonni qo`ying');
// var math = prompt('Amal kirgazing'); 
//  var num2 = +prompt('Ikkinchi sonni kiriting'); 


//  if(math === "+"){
//     console.log(num1 + num2)
//  }else if(math === "-"){
//     console.log(num1 - num2)
//  }else if(math === "*"){
//     console.log(num1 * num2)
//  }else if(math === "/"){
//     console.log(num1 / num2)
//  }else{
//     console.log("hatolik yuz berdi")
//  }


///////////////=============kalkulator==============////////////////

//var num1 = +prompt('Birinchi sonni qo`ying'); // '12'
// var math = prompt('Amal kirgazing'); // *
// var num2 = +prompt('Ikkinchi sonni kiriting'); // 3

// var res = eval(num1 + math + num2) // 15 + 21
// // var a = '15'
// document.write(res);





///////////////////=================swich case=============////////////////////

// var forDays = prompt("Hafta kunini kirgazing: ")

// switch(forDays){
//     case "dush":
//     case "sesh":
//     case "chor":
//     case "pay":
//     case "juma":
//     document.write("Siz ish kunidasiz samaraliroq ishlang");
//     break
//     case "shan":
//     case "yak":
//     document.write("Dam olish kunlaringizni maroqliy o'tkazing");
//     break
//     default:
//     document.write("Siz boshqa sayyorada yashayabsiz");
// }






//*=============== string methods */

//var a = "Malikam";

// console.log(a.length);
// length-//uzunlik

//console.log(a.toUpperCase())   //harflarni kattalashtrb beradi
//console.log(a.toLowerCase())    //kichik qlb beradi
//console.log(a.charAt())          //soniga qarab harflarni belglab beradi
//console.log(indexOf("Malikam"))
//console.log(a.slice(0, 4))       //sozni kesb beradi
//console.log(a.replace("Malikam", "guli"))   //sozni joyini almashtrb beradi
//console.log(a.split(""))          //array qladi
//console.log(a.includes("Maikam"))  //ichidagini tekshiradi
//onsole.log(a.concat()) //qoshib beradi



// var citiy = "Toshkent"
// console.log(citiy.substring(0, 5))   //harfni soniga qarab qirqb beradi

///////////////////////////////////////////////mastiv/array-bitta ozgaruvcini iciga uni tariflab beradi
// var a = "salom"
// var b = 8

// var c = ["yashil",
//  "kok",
//   "qizil",
//    "kulrang",
//     "oq",
//     "siyohrang",
//      "pushti"];
     
  












///////////////////////////////////////////========================for */

// var school = 100;
// var i = 0;

// while(school >= i){
//     console.log(i);
//     i++;
// }



// var son = 30;
// var s = 10;

// while(son >= s){
//     console.log(s);
// s++;
// }

////////////======function
// var a = "salom"
// function noname(){
//     var a = "gulya"
//     console.log(a)
// // return a
// }
// console.log(a)
// noname()
// var b = ketmon()
// console.log(b);


