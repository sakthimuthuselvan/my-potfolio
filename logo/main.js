// let color=["#D7DBDD ","#F9E79F","#AEB6BF","#AED6F1","#5D6D7E ","#53B3F4","#F3BE53","#95A5A6","#F0B27A","#76D7C4","#76D7C4"];
// let b=0;

setInterval(()=>{
    // if(b==12){
    //     b=0;
    // }
   
    // let logo=document.getElementById("logos");
    // let chg=color[b];
    // logo.style.backgroundColor=chg;
    // b++;
    let randam=Math.floor(Math.random()* 1234)
    // let randam=Math.floor(Math.randam()*13234)
    let logo=document.getElementById("logos")
    logo.style.backgroundColor="#"+randam

},1000);

var easy=false;
var easy1=false;

function radio(){
    easy=!easy;

   let sakthi=document.getElementById("radio1").value
   let btn=document.getElementById("btn1")
   let btn2=document.getElementById("btn2")
   if(easy==true){
        btn.style.display="block";
        btn2.style.display="none"
        easy=false;
     
    }else{
        btn.style.display="none";
        btn2.style.display="block"
       
    }
}

function radio1(){
    
    easy1=!easy1;
  
    let simeon=document.getElementById("radio1").value
    let btn=document.getElementById("btn2")
    let btn1=document.getElementById("btn1")
    if(easy1==true){
         btn.style.display="block";
         btn1.style.display="none";
         easy1=false;
     }else{
        btn.style.display="none";
        btn1.style.display="block";
     }
 }

let click=false
let nav=document.getElementById("navsec")
function menu(){
    click=!click
    console.log(click)
    if(click==true){
        nav.style.display="block" 
    
    }else{
        nav.style.display="none" 
    }
}



const blink=["developer","fresher"]
let index=0
let count=0

let textcontent=""
var letter=""


function no(){
    if(index===blink.length){
        index=0
    }
    textcontent=blink[index]
    letter=textcontent.slice(0,++count)

    document.getElementById("span").innerHTML=letter
    if(letter.length===textcontent.length){
        index++;
        count=0
        
    }
    setTimeout(no,500)

}
no()
