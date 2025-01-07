//var names=new Array("mahdi","ali","amir");

//var myarray=["mahdi",23,true,"najafi",25.43444];


//var colors =["red","black","blue","orange"];

//colors.reverse();                    چیدن از اخر

//colors.shift();                     کم کردن از اول

//colors.unshift("white");           اضافه کردن از اول

//var newcolors=colors.slice();       کپی گرفتن از ارایه و قرار دادن در یک ازایه دیگر

//var result=colors.indexOf("blue",0);     جست و جو کردن بین مقادیر در ارایه

//var arraystring=colors.join("-");        چسباندن مقادیر ارایه کنار هم.  


//var a,b;
//var isequal;
//a = 50;

//b = 5;

//if(a == b)
    //{
      //  isequal=true;
    //}
//else
    //{
      //  isequal=false;
   // }

    //console.log("the equal math is:"+isequal);



 var today = new Date().getDay();
 
 var day;


 switch(today)
 {
    case 0:
          day = "شنبه";
          break;
     case 1 :
          day = "یکشنبه";
          break;
     case 2:
          day = "دوشنبه";
          break;
     case 3:
          day = "سه شنبه";
          break;
     case 4:
          day = "چهارشنبه"; 
          break; 
     case 5:
          day = "پنجشنبه"; 
          break; 
     case 6:
          day = "جمعه";
          break;
          default:7
                day="your vaalue not found";                        
 }


 document.write("today is :"+ day)
 