let color=["#D7DBDD ","#F9E79F","#AEB6BF","#AED6F1","#5D6D7E ","#53B3F4","#F3BE53","#95A5A6","#F0B27A","#76D7C4","#76D7C4"];
let b=0;

setInterval(()=>{
    if(b==12){
        b=0;
    }
   
    let logo=document.getElementById("logos");
    let chg=color[b];
    logo.style.backgroundColor=chg;
    b++;
},2000);


// let what=false
//   function radio(){
    
//     let  btn1=document.getElementById("btn1")
//     let a=document.getElementById("radio1").value
//     what=!what
//     if((a==1)&&(what==false)){
//         btn1.style.display="block"

//     }else{
//         btn1.style.display="none"
//     }
//   }
//   radio()

var easy=false;

function radio(){
    easy=!easy;
   let radio=document.getElementById("radio1").value
   let btn=document.getElementById("btn1")
   if((radio==1)&&(easy==true)){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
}

function radio1(){
    easy=!easy;
    let radio=document.getElementById("radio1").value
    let btn=document.getElementById("btn2")
    if((radio==1)&&(easy==true)){
         btn.style.display="block";
     }else{
        btn.style.display="none";
     }
 }

let arr=["developer","fresher"]
let count=0;
let index=0;
let counttext=""
let indextext=""
 function sakthi(){
let span=document.getElementById("span");

counttext=arr[count]
indextext=counttext.slice(0,index++)
    console.log(indextext)

    span.innerText=indextext
    setTimeout(sakthi,100)
}
sakthi()