let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartitem.classList.remove('active'); 
}

let cartitem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartitem.classList.remove('active'); 
}

let firstname = document.getElementById("fname");
let emailid = document.getElementById("e_id");
let phoneno = document.getElementById("p_num");
flag=1;
function validateform(){
    // first name
    if(firstname.value == "" ){
        document.getElementById("firsterror").innerHTML = "*Enter name"; 
      flag = 0;
     } else{
       document.getElementById("firsterror").innerHTML = ""; 
       flag =1;
     }

     //email id................
     if(emailid.value ==""){
        document.getElementById("emailerror").innerHTML = "*Enter Email"; 
        flag = 0 ;
      }else if(!emailid.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        document.getElementById("emailerror").innerHTML = "write email in proper format";
        return false;
      }else{
        document.getElementById("emailerror").innerHTML = ""; 
        flag = 1 ;
      }

      // FOR PHONE NUMBER..........................................................
      if(phoneno.value == ""){
        document.getElementById("phonerror").innerHTML = "*Enter Phone"; 
        flag = 0 ;
      }else{
        document.getElementById("phonerror").innerHTML = "";
        flag = 1;   
      }

      if(firstname.value   && emailid.value && phoneno.value ){
        alert("submitted");
        return true;

}

}
