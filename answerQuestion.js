var slide = document.getElementsByClassName("hiddenSlide");
var hiddenDiv = slide[0];
if(hiddenDiv!=null){
    setTimeout(function() {location.reload()}, 10000);
}
else {
  
  
  var choiceA = document.getElementsByClassName("choice");
  choiceA[0].click();
  var buttons = document.getElementsByClassName("btn primary");
  buttons[0].click()
  

}