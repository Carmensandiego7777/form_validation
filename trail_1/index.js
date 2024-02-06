
async function initializeLocalStorage() {
    try {
        const existingData = JSON.parse(localStorage.getItem("userData"));
        const image = await generatePhoto()
            const data ={
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            dob: document.getElementById('date').value,
            gender: document.getElementById('gender').value,
            education: document.getElementById('education').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            PAN: document.getElementById('PAN').value,
            photo: {
                url: image,
                size: document.getElementById('photo').files[0].size,
                type: document.getElementById('photo').files[0].type
            }
        }
        if(existingData){
            localStorage.setItem("userData", JSON.stringify([...existingData, data]));
        }
        else {
            localStorage.setItem("userData", JSON.stringify([data]));
        }
    }
    catch(e){
        console.error(e)
    }
}



const generatePhoto = () => {
    const element = document.getElementById('photo')
    return new Promise((resolve, reject) => {
        const image = element.files[0]
        if(image) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const base64Photo = e.target.result
                resolve(base64Photo)
            }
            reader.error = (e) => {
                reject(e)
            }
            reader.readAsDataURL(image)
        }
        else {
            reject(null)
        }
    })
}

function validateEntireForm(e) {
    e.preventDefault();
    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isPhoneValid = phoneValidation();
    const isDOBValid = dateValidation();
    const isGenderValid = genderValidation();
    const isEducationValid = educationValidation();
    const isUsernameValid = usernameValidation();
    const isPasswordValid = passwordValidation();
    const isPANValid = PANValidation();
    const isPhotoValid = photoValidation();
    if (isNameValid && isEmailValid && isPhoneValid && isDOBValid &&
        isGenderValid && isEducationValid &&
        isUsernameValid && isPasswordValid && isPANValid && isPhotoValid) {
        
        initializeLocalStorage();

        console.log("Form is valid");
    } else {
        console.error("Form has validation errors");
    }
}


function nameValidation(){
    const fname= document.querySelector(".name").value;
    const nameError=document.getElementById("nameError");
    const nameReg=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const verifyNameValidation=nameReg.test(fname);
    if(verifyNameValidation){
        nameError.innerHTML="Looks Good";
    }else{
        nameError.innerHTML="<p class='error'>Invalid Name</p>";
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
        emailError.innerHTML="<p class='error'>Invalid Email</p>";
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
        phoneError.innerHTML="<p class='error'>Invalid Phone</p>";
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
        dateError.innerHTML="<p class='error'>Invalid Date [1950 -2010 only]</p>";
    }
    return verifyDateValidation
}
function usernameValidation(){
    const username= document.querySelector(".username").value;
    const usernameError=document.getElementById("usernameError");
    const usernameReg=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const verifyUsernameValidation=usernameReg.test(username);
    if(verifyUsernameValidation){
        usernameError.innerHTML="Looks Good";
    }else{
        usernameError.innerHTML="<p class='error'>Invalid Username</p>";
    }
    return verifyUsernameValidation
}

function passwordValidation(){
    const password= document.querySelector(".password").value;
    const passwordError=document.getElementById("passwordError");
    const passwordReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const verifyPasswordValidation=passwordReg.test(password);
    if(verifyPasswordValidation){
        passwordError.innerHTML="Looks Good";
    }else{
        passwordError.innerHTML="<p class='error'>Invalid Password</p>";
    }
    return verifyPasswordValidation
}

function  PANValidation(){
    const PAN= document.querySelector(".PAN").value;
    const PANError=document.getElementById("PANError");
    const PANReg=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const verifyPANValidation=PANReg.test(PAN);
    if(verifyPANValidation){
        PANError.innerHTML="Looks Good";
    }else{
        PANError.innerHTML="<p class='error'>Invalid PAN</p>";
    }
    return verifyPANValidation
}

function genderValidation() {
    const genderSelect = document.querySelector(".gender");
    const genderError = document.getElementById("genderError");
    
    const selectedGender = genderSelect.value;
    
    const isValid = selectedGender !== "";

    if (isValid) {
        genderError.innerHTML = "Looks Good";
    } else {
        genderError.innerHTML = "<p class='error'>Please select a gender</p>";
    }
    return isValid;
}

function educationValidation() {
    const educationSelect = document.querySelector(".education");
    const educationError = document.getElementById("educationError");
    
    const selectedEducation = educationSelect.value;
    
    const isValid = selectedEducation!== "";

    if (isValid) {
        educationError.innerHTML = "Looks Good";
    } else {
        educationError.innerHTML = "<p class='error'>Please select an education</p>";
    }

    return isValid;
}

function photoValidation() {
    const photoInput = document.getElementById("photo");
    const photoError = document.getElementById("photoError");
    if (photoInput.files[0]) {
        const selectedPhoto = photoInput.files[0];
        const allowedTypes = ["image/jpeg", "image/png"];
        const maxSizeMB = 2;

        if (allowedTypes.includes(selectedPhoto.type)) {
            if (selectedPhoto.size / (1024 * 1024) <= maxSizeMB) {
                    photoError.innerHTML = "Photo is valid";
                    return true
            } else {
                photoError.innerHTML = "<p class='error'>Photo size should be less than 2 MB</p>";
                photoInput.value = "";
            }
        } else {
            photoError.innerHTML = "<p class='error'>Please select a valid JPEG or PNG image</p>";
            photoInput.value = "";
        }
    } else {
        photoError.innerHTML = "<p class='error'>Please select a photo</p>";
    }
    return false
}

function loadUsers(users) {
    const results = document.querySelector('.result')
    results.innerHTML = "";
    users.map((user,index) => (
        results.innerHTML += `<p key=${index}>Name: ${user.name}, Email: ${user.email}, Username: ${user.username}</p>`
    ))
}   

loadUsers(JSON.parse(localStorage.getItem('userData')))
function searchData() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const resultContainer = document.getElementById("result");
    const data = JSON.parse(localStorage.getItem('userData'))
    const nameRegex = /^[a-z]+$/
    if(searchTerm === '') return loadUsers(data) 
    let newData = []
    if(nameRegex.test(searchTerm)){
        newData = data.filter(user => user.name.toLowerCase().includes(searchTerm))
    }
    const ageRegex = /^\d+$/
    if(ageRegex.test(searchTerm)){
        newData = data.filter(user => {
            const birthDate = new Date(user.dob)
            const today = new Date()
            const difference = today - birthDate
            const daysALive = Math.floor(difference / (1000 * 60 * 60 * 24))
            console.log(daysALive > +searchTerm)
            return daysALive < +searchTerm
        })
    }
    const sizeRegex = /^\d+(mb|kb)$/
    if(sizeRegex.test(searchTerm)){
        const search = searchTerm.toLowerCase()
        const digits = +search.match(/\d+/)[0]
        const unit = search.match(/(mb|kb)/)[0]
        let size = 0
        if(unit == 'mb'){
            size = digits * 1024 * 1024
        }
        if(unit == 'kb'){
            size = digits * 1024
        }
        newData = data.filter(user => user.photo.size < size)
    }

    if(newData.length > 0){
        loadUsers(newData)
    }
    else {
        resultContainer.innerHTML = "No matching data found";
    }
}
