// צור כפתור שברגע שלוחצים עליו משנה את הטקסט שלו ל- "לחצו עלי".
// צור 4 כפתורים ברגע שלוחצים עליהם כל כפתור מקפיץ הודעה אחרת.
// צור אלמנט רשימה עם 5 אלמנטים ברגע שלוחצים על רשימה מודפס הטקסט שבה(class).
const changingBtn = document.getElementById("changingBtn");
//console.log(changingBtn);
changingBtn.addEventListener("click", function () {
  changingBtn.innerText = "Click ME";
  console.log(changingBtn.innerText);
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////

firstBtn = document.getElementById("firstButton");
secBtn = document.getElementById("secButton");
thirdBtn = document.getElementById("thirdButton");
fourthBtn = document.getElementById("fourthButton");

firstBtn.addEventListener("click", function () {
  alert("Welcome");
});
secBtn.addEventListener("click", function () {
  alert("This is");
});
thirdBtn.addEventListener("click", function () {
  alert("the First");
});
fourthBtn.addEventListener("click", function () {
  alert("DOM class");
});

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
let theLi = document.getElementsByClassName("theList");
let theUl = document.getElementById("theUl");
theUl.addEventListener("click",function(){
    for (let i = 0 ; i < theLi.length; i++){
        console.log(theLi[i].innerText);
    
    }

})
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

let myBtn = document.getElementById("myBtn");
let myP = document.getElementById("theP");
let num = 0;
let minusBtn= document.getElementById("minusBtn");
myBtn.addEventListener("click", function (){

  myP.innerText = num;
  num= num + 1
  // console.log(num);
})

minusBtn.addEventListener("click", function(){

  myP.innerText = num;
  num= num-1;
  // console.log(num);
})