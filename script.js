let inputSlider = document.getElementById("inputSlider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//shoiwng input slider value.
slidervalue.textContent = inputSlider.value;
inputSlider.addEventListener('input' , ()=>{
    slidervalue.textContent = inputSlider.value;
});

genBtn.addEventListener('click' , ()=>{
    passbox.value= generatePassword();
});


let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Allnumbers = "0123456789"; 
let Allsymbols = "~!@#$%^&*";

//functions to generate Password
function generatePassword(){
    let genPassword = "";
    let AllChars = "";

    AllChars += lowercase.checked ? lowerchars : "";    
    AllChars += uppercase.checked ? upperchars : "";    
    AllChars += Numbers.checked ? Allnumbers : "";    
    AllChars += Symbols.checked ? Allsymbols : "";


    if(AllChars == "" || AllChars.length == 0){
        return genPassword;
    }


    let i = 1;
    while(i<=inputSlider.value){
        genPassword += AllChars.charAt(Math.floor(Math.random() * AllChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied"
    }
    setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title = "";
    }, 3000)
});

