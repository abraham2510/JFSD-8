var form = document.getElementById("form");
var Password = document.getElementById("Password");
var ConfirmPassword = document.getElementById("ConfirmPassword");
var passcolor = document.getElementById("passcolor");
var passcolor2 = document.getElementById("passcolor2");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    passcolor.classList.add("hidden");
    passcolor2.classList.add("hidden");

    regexpassword(Password.value , ConfirmPassword.value);
    console.log(Password.value);
    console.log(ConfirmPassword.value);
    form.reset();
    
});

function regexpassword(Password , ConfirmPassword){
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(!regex.test(Password)){
        passcolor.classList.remove("hidden");
    }

    if(Password !== ConfirmPassword){
        passcolor2.classList.remove("hidden");

}
}


