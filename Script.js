// JavaScript source code
function reset(){
    var x=document.getElementById('f1');
    x.reset();
}
function valid() {
  var x = document.getElementById('in1').value;
  var x1 = document.getElementById('in2').value;
  var x2 = document.getElementById('in3').value;

  var x3 = document.getElementById('in4').value;

  if (x === ""){
    alert("Enter First Name.");
    return false;
  }
  if (x1 ===""){
    alert("Enter Last Name."+x);
    return false;
  }
  if (x2=== ""){
    alert("Enter Mobile No.");
    return false;
  }
  if (x3 === ""){
    alert("Enter Email Id.");
    return false;
  }
  if(allLetter(x)===false)
  	return false;
  if(allLetter(x1)===false)
  	return false;
  if(phonenumber(x2)===false)
  	return false;
  if(ValidateEmail(x3)===false)
  	return false;
  alert("Information Send Sucessfully. We will Contact You Shortly.");
  }
  function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.match(letters))
      {
      return true;
      }
      else
      {
      alert('Please input alphabet characters only in name fields.');
      return false;
      }
      }
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }
  function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
 
