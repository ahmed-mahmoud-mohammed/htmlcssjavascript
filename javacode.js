function mac(){
    location.href= "https://www.mcdonalds.com/us/en-us.html";
}
function donald(){
    location.href= "https://www.mcdonalds.com/us/en-us.html";
}
function king(){
    location.href= "https://www.bk.com/";
}
function domino(){
    location.href= "https://www.dominos.com.eg/en/";
}
function papa(){
    location.href= "https://www.papajohnsegypt.com/";
}
function dairy(){
    location.href= "https://www.dairyqueen.com/en-us/";
}
function dunkin(){
    location.href= "https://www.dunkindonuts.com/en";
}
function pizza(){
    location.href= "https://www.egypt.pizzahut.me/en/home?session-expired=true";
}
function star(){
    location.href= "https://www.starbucks.com/";
}
function kfc(){
    location.href= "https://www.egypt.kfc.me//?lng=en&gclid=CjwKCAjwp7eUBhBeEiwAZbHwkRswvmLVGDbpmgoTVr2sZL02SZI4imPPCc1qlcmhCy_RKtqSdIYn6BoC5-gQAvD_BwE&gclsrc=aw.ds";
}
function subway(){
    location.href= "https://www.menuegypt.com/Subway";
}
function check()
{
  let fnamemassage = document.getElementById("fnamemassage");
  let lnamemassage = document.getElementById("lnamemassage");
  let addressmassage = document.getElementById("addressmassage");
  let emailmassage = document.getElementById("emailmassage");
  let checkemailmassage = document.getElementById("checkemailmassage");
  let phonemassage = document.getElementById("phonemassage");
  let checkmassage = document.getElementById("checkmassage")
  let fname= document.getElementById("fname").value.trim();
if(fname==="")
{
  fnamemassage.innerText="please enter first name";
    fnamemassage.style.color="red";
    return;
}
fnamemassage.innerText="Success";
fnamemassage.style.color="green";


let lname= document.getElementById("lname").value.trim();
if(lname==="")
{
  lnamemassage.innerText="please enter last name";
    lnamemassage.style.color="red";
    return;
}
lnamemassage.innerText="Success";
    lnamemassage.style.color="green";


let num= document.getElementById("num").value;
if(num.length!==11)
{
  phonemassage.innerText="please enter 11 numbers";
    phonemassage.style.color="red";
    return;
}
phonemassage.innerText="Success";
    phonemassage.style.color="green";


let address= document.getElementById("address").value.trim();
if(address==="")
{
  addressmassage.innerText="please enter your address";
    addressmassage.style.color="red";
    return;
}
addressmassage.innerText="Success";
    addressmassage.style.color="green";


let email=document.getElementById("email").value;
if((/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))===false)
{
  emailmassage.innerText="the email should be like: something@somthing.com";
  emailmassage.style.color="red";
  return;
}
emailmassage.innerText="Success";
  emailmassage.style.color="green";


  let checkemail=document.getElementById("checkemail").value;
if(checkemail!==email)
{
  checkemailmassage.innerText="the email doesn't match";
  checkemailmassage.style.color="red";
  return;
}
checkemailmassage.innerText="Success";
  checkemailmassage.style.color="green";


  let pass= document.getElementById("password").value;
  let numpass=pass
  let passlength = pass.length;
  let massage = document.getElementById("massage");
  var specialchar=0;
  if(passlength !== 8){
    massage.innerText="the password length must be 8";
    massage.style.color="red";
    return;
  }
  if(pass[0].toUpperCase() !== pass[0])
  {
    massage.innerText="the first letter should be uppercase";
    massage.style.color="red";
    return;
  }
  if(numpass.replace(/[^0-9]/g,"").length===0)
  {
    massage.innerText="the password should contain at least one digit";
    massage.style.color="red";
    return;
  }
  if(/\s/.test(pass)===true)
  {
    massage.innerText="the password should not contain any whitespace";
    massage.style.color="red";
    return;
  }
  for (var i = 0; i < 8; i++)
        {
          if (pass[i] >= "A" && pass[i] <= "Z")
          {

          }
          else if (pass[i] >= "a" && pass[i] <= "z")
          {

          }
          else if (pass[i] >= "0" && pass[i] <= "9")
          {

          }
          else specialchar++;
        }
        if(specialchar!==1)
        {
          massage.innerText="the password should contain only one special char";
    massage.style.color="red";
    return;
        }
        massage.innerText="Success";
        massage.style.color="green";


let checkpass =document.getElementById("checkpassword").value;
if(checkpass!==pass){
  checkmassage.innerText="the password doesn't match";
  checkmassage.style.color="red";
  return;
}
checkmassage.innerText="Success";
  checkmassage.style.color="green";


        document.getElementById("myform").submit();
}