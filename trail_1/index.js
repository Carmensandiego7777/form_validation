

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateEntireForm(); // in submit through onclick event, we run a single function.
})

const validateEntireForm = () => {
    const data = {
        
    }
}
validateName()
validateEmail()
validatePhone()
validateDOB()
// validateGender()
// validateEducation()
// validateOccupation()
// validateUsername()
// validatePassword()
// validatePan()
if(validateDOB() && validateName() 
&& validateEmail() 
 && validatePhone()  && validatePassword()
  && validategender() 
   && validateUsername()&& validateEducation()&& validatePan()){
    //console.log("form is valid")
   }else{
    console.log("form is not valid")
   }


function nameValidation(){
    const fname= document.querySelector(".name").value;
    const nameError=document.getElementById("nameError");
    const nameReg=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const verifyNameValidation=nameReg.test(fname);
    if(verifyNameValidation){
        nameError.innerHTML="Looks Good";
    }else{
        nameError.innerHTML="Invalid Name";
    }
    return verifyNameValidation
}


function emailValidation(){
    const email= document.querySelector(".email").value;
    const emailError=document.getElementById("emailError");
    const emailReg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const verifyEmailValidation=emailReg.test(email);
    if(verifyEmailValidation){
        emailError.innerHTML="Looks Good";
    }else{
        emailError.innerHTML="Invalid Email";
    }
    return verifyEmailValidation
}

function phoneValidation(){
    const phone= document.querySelector(".phone").value;
    const phoneError=document.getElementById("phoneError");
    const phoneReg=/^[6-9]{1}[0-9]{9}$/;
    const verifyPhoneValidation=phoneReg.test(phone);
    if(verifyPhoneValidation){
        phoneError.innerHTML="Looks Good";
    }else{
        phoneError.innerHTML="Invalid Phone";
    }
    return verifyPhoneValidation
}

function dateValidation(){
    const date= document.querySelector(".date").value;
    const dateError=document.getElementById("dateError");
    const dateReg=/^(19[5-9]\d|200\d|2010)[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/;
    const verifyDateValidation=dateReg.test(date);
    if(verifyDateValidation){
        dateError.innerHTML="Looks Good";
    }else{
        dateError.innerHTML="Invalid Date [1950 -2010 only]";
    }
    return verifyDateValidation
}

function usernameValidation(){
    let data= null;
    const username= document.querySelector(".username").value;
    if(localStorage.getItem("base_storage")){
        data = JSON.parse(localStorage.getItem("base_storage"))
        data.map(user =>{
            if(user.username === username){
                // usernameError(document.querySelector(".username"),'username already present');
                // return false;
                usernameError.innerHTML="username already present";
            }else if(user.username <3){
                usernameError.innerHTML="Too short username";
            }else if(user.username >15){
                usernameError.innerHTML="Too long username";
            }
        })
    }}