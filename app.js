var inputText=document.querySelector('#input-text');
var h1Btn=document.querySelector('#h1-btn');
var h2Btn=document.querySelector('#h2-btn');
var h3Btn=document.querySelector('#h3-btn');
var outputDiv=document.querySelector('#output-div');


function headerchange(){
    inputText.style.fontSize = "2em";
  inputText.style.fontWeight = " bolder";
}

function captureText(){
    outputDiv.innerText=inputText.value;
}

function headerh2(){
    captureText()
    outputDiv.style.fontSize="1.5em";
    outputDiv.style.fontWeight="bolder";
}

function headerh3(){
    captureText()
    outputDiv.style.fontSize="1.11em";
    outputDiv.style.fontWeight="bolder";
}

h1Btn.addEventListener('click',headerchange);
h2Btn.addEventListener('click',headerh2);
h3Btn.addEventListener('click',headerh3);