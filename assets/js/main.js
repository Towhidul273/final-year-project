function display(){
  var mynum = document.getElementById("myinput").value;

  var discount=mynum%2;

  if(discount==1){
    alert("Odd");
  }
  else {
    alert("Even");
  }

}
