const form = document.getElementById('form')
const Name = document.getElementById('name')
const toast = document.getElementById("q")
const email = document.getElementById("email")
const e_toast = document.getElementById("w")
var emailInput = document.getElementById('email');
var emailError = document.getElementById('emailError');
var phoneInput = document.getElementById("phone");
var phoneError = document.getElementById("phoneError");
var dateInput = document.getElementById("date");
var dateError = document.getElementById("dateError");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

const validateForm = () => {
    var usernameInput = document.getElementById('username').value

    const data = {
        name: Name.value,
        email: emailInput.value,
        phone: phoneInput.value,
        date: dateInput.value,
        username: usernameInput.value,
         
    }
    if(localStorage.getItem('jobData')){
        console.log(JSON.parse(localStorage.getItem('jobData')))
        alert('already set')
    }   
    else {
        localStorage.setItem('jobData', JSON.stringify(data))
    }
}


Name.addEventListener("input",() => {
    if(Name.value.length < 4){
        toast.innerText="Too Short!";
    }
    else if(Name.value.length>=4 && Name.value.length<=20){
        toast.innerText="Looks good!"
    }else{
        toast.innerText="very large"
    }
})


emailInput.addEventListener('input', function() {
    // Get the entered email value
    var email = emailInput.value;

    // Validate the email using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(email);

    // Display error message if the email is not valid
    if (!isValidEmail) {
    emailError.textContent = 'Please enter a valid email address';
    } else {
    emailError.textContent = ''; // Clear the error message
    }
});

phoneInput.addEventListener('input', function(){
    var phone = phoneInput.value;
    var phoneRegex = /^[6-9]{1}[0-9]{9}$/;
    var isValidPhone = phoneRegex.test(phone);
    if(!isValidPhone){
        phoneError.textContent = 'Please enter a valid phone number';
    }else{
        phoneError.textContent = '';
    }
});


    
dateInput.addEventListener('input', function(){
    var date = dateInput.value;
    console.log(date);
    var dateRegex = /^(19[5-9]\d|200\d|2010)[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/;
    var isValidDate = dateRegex.test(date);
    if(!isValidDate){
        dateError.textContent = 'Please enter a valid date';
    }else{
        dateError.textContent = '';
    }
});

// your_script.js

// Assuming you have an array to store existing usernames
let existingUsernames = ["john", "alice", "bob"];

function validateUsername() {
  // Get the input value
  let usernameInput = document.getElementById('username');
  let username = usernameInput.value.trim();

  // Get the error span
  let userError = document.getElementById('userError');

  // Check if the username is unique and valid
  if (username === "") {
    userError.textContent = 'Username cannot be empty';
  } else if (existingUsernames.includes(username)) {
    userError.textContent = 'Username is not unique, choose another one';
  } else {
    // Add the username to the array of existing usernames
    existingUsernames.push(username);
    userError.textContent = 'Username is unique and valid';
  }
}

const btn = document.querySelector('.btn1');
btn.addEventListener('click', () => {
    var name = document.querySelector('.test2').value;
    var password = document.querySelector('.test1').value
    console.log(name, password)
    const data = {
        name: name,
        password: password
    }
    // localStorage.setItem("test", JSON.stringify(data))
    // const emaill = document.querySelector(".emaill").value
    // console.log(emaill)

})

