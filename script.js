// form 1
function vfun(){
  var uname=document.forms["myform"]["uname"].value;
  var upassword=document.forms["myform"]["upassword"].value;
  
  if(uname==null|| uname==""){
    document.getElementById("errorbox").innerHTML="enter the user name"; return false;

  } 
  if(upassword==null || upassword==""){
    document.getElementById("errorbox").innerHTML= "enter the password";return false;
  }
  if (uname!= ''&& upassword !=''){
    alert('login successfully');
  }
}
// form2
function vfun1(){
  var uname1=document.forms["myform2"]["uname1"].value;
  var Email=document.forms["myform2"]["Email"].value;
  var upassword1=document.forms["myform2"]["upassword1"].value;
  var upassword2=document.forms["myform2"]["upassword2"].value;
  var errorBox1 = document.getElementById("errorbox1");

  if(uname1==null|| uname1==""){
    document.getElementById("errorbox1").innerHTML="enter the user name"; return false;

  } 
  if(Email==null || Email==""){
    document.getElementById("errorbox1").innerHTML= "enter the email";return false;
  }
  if(upassword1==null|| upassword1==""){
    document.getElementById("errorbox1").innerHTML="enter the password";return false;

  }
  if(upassword2==null|| upassword2==""){
    document.getElementById("errorbox1").innerHTML="enter the password";return false;

  }
  if (upassword1 != upassword2){
   document.getElementById("errorbox1r").innerHTML="password don't match"; return false;
  }
  if (uname1 !='' && upassword1 !='' && upassword2 !='' && Email != '' &&  upassword1==upassword2){
    alert("Register Successfully");return true;

  }
  

}