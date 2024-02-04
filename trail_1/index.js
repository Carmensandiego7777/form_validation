
function initializeLocalStorage() {
    const existingData = localStorage.getItem("base_storage");

    if (!existingData) {
        const dummyData = [
            {
                name: "John Doe",
                email: "john@example.com",
                phone: "9876543210",
                dob: "1990-01-01",
                gender: "male",
                education: "bachelors",
                username: "john_doe123",
                password: "Abc@1234",
                PAN: "ABCDE1234F",
            },
            // Add more dummy data as needed
        ];

        localStorage.setItem("base_storage", JSON.stringify(dummyData));
    }
}

// Call the function to initialize local storage with dummy data
initializeLocalStorage();

// Rest of your code...


form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateEntireForm(); // in submit through onclick event, we run a single function.
})

function validateEntireForm() {
    const isNameValid = nameValidation();
    const isEmailValid = emailValidation();
    const isPhoneValid = phoneValidation();
    const isDOBValid = dateValidation();
    const isGenderValid = genderValidation();
    const isEducationValid = educationValidation();
    const isUsernameValid = usernameValidation();
    const isPasswordValid = passwordValidation();
    const isPANValid = PANValidation();

    // You can add more validation functions as needed

    // Check if all validations pass
    if (isNameValid || isEmailValid || isPhoneValid || isDOBValid ||
        isGenderValid || isEducationValid ||
        isUsernameValid || isPasswordValid || isPANValid) {
        
        // Store all data in local storage
        storeFormData();

        // Form is valid, you can proceed with submission or other actions
        console.log("Form is valid");
    } else {
        // Form has validation errors
        alert("Form has validation errors");
    }
}

function storeFormData() {
    const data = {
        name: document.querySelector(".name").value,
        email: document.querySelector(".email").value,
        phone: document.querySelector(".phone").value,
        dob: document.querySelector(".date").value,
        gender: document.querySelector(".gender").value,
        education: document.querySelector(".education").value,
        username: document.querySelector(".username").value,
        password: document.querySelector(".password").value,
        PAN: document.querySelector(".PAN").value,
        // Add more fields as needed
    };

    // Get existing data from local storage or initialize an empty array
    if(localStorage.getItem("base_storage")===null) {
        localStorage.setItem("base_storage", JSON.stringify([{...data}]));
    }else {
        // localStorage.setItem("base_storage", JSON.stringify(data));
        const existingData = JSON.parse(localStorage.getItem("base_storage"));
        localStorage.setItem("base_storage", JSON.stringify([...existingData, data]));
    }
    // console.log(data.name, data.email, data.phone, data.dob, data.gender, data.education)
    // Add the new data to the array
    // existingData.push(data);

    // Update local storage with the updated array
    // localStorage.setItem("base_storage", [...existingData, JSON.stringify()]);
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
// for USERNAME
// function handleSubmit(e) {
//     e.preventDefault();
//     if (usernameValidation()) {
//         updateLocalStorage();
//         // Proceed with form submission or any other logic here
//         console.log("Form submitted successfully");
//     } else {
//         console.log("Form not submitted due to validation errors");
//     }
// }
// function updateLocalStorage() {
//     const username = document.querySelector(".username").value;
//     const data = JSON.parse(localStorage.getItem("base_storage")) || [];

//     // Check if the username is already present
//     const existingUser = data.find(user => user.username === username);

//     if (!existingUser) {
//         // Add the new user to the data array
//         data.push({ username: username });

//         // Update the local storage
//         localStorage.setItem("base_storage", JSON.stringify(data));
//     }
// }

// function initializeLocalStorage() {
//     const existingData = localStorage.getItem("base_storage");

//     if (!existingData) {
//         const dummyData = [
//             { username: "user1" },
//             // { username: "user2" },
//             // Add more dummy data as needed
//         ];

//         localStorage.setItem("base_storage", JSON.stringify(dummyData));
//     }
// }

// initializeLocalStorage();

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// function usernameValidation() {
//     const username = document.querySelector(".username").value;
//     const usernameError = document.querySelector(".usernameError");

//     if (localStorage.getItem("base_storage")) {
//         const data = JSON.parse(localStorage.getItem("base_storage"));

//         const existingUser = data.find(user => user.username === username);

//         if (existingUser) {
//             usernameError.innerHTML = "Username already present";
//             return false;
//         } else if (username.length < 3) {
//             usernameError.innerHTML = "Too short username";
//             return false;
//         } else if (username.length > 15) {
//             usernameError.innerHTML = "Too long username";
//             return false;
//         } else {
//             // Reset error message if username is valid
//             usernameError.innerHTML = "";

//             // Add the new user to the data array
//             data.push({ username: username });

//             // Update the local storage
//             localStorage.setItem("base_storage", JSON.stringify(data));

//             return true; // Username is valid
//         }
//     }

//     return false; // In case local storage is not available
// }
function usernameValidation(){
    const username= document.querySelector(".username").value;
    const usernameError=document.getElementById("usernameError");
    const usernameReg=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const verifyUsernameValidation=usernameReg.test(username);
    if(verifyUsernameValidation){
        usernameError.innerHTML="Looks Good";
    }else{
        usernameError.innerHTML="Invalid Username";
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
        passwordError.innerHTML="Invalid Password";
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
        PANError.innerHTML="Invalid PAN";
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
        genderError.innerHTML = "Please select a gender";
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
        educationError.innerHTML = "Please select an education";
    }

    return isValid;
}
