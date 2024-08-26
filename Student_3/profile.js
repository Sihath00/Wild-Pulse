var totalSteps = 3;  
var currentStep = 0; 

function updateProgressBar() {
    currentStep++;
    var progress = (currentStep / totalSteps) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '%';
}
function step1() {
    var userName = prompt("Enter Your Name: ");
    document.getElementById("UserName").innerHTML = userName;

    var userSurname = prompt("Enter Your Surname: ");
    document.getElementById("UserSurname").innerHTML = userSurname;

    var userAge = parseInt(prompt("Enter Your Age: "));
    document.getElementById("UserAge").innerHTML = userAge;

    var userGender = prompt("Enter Your Gender: ");
    document.getElementById("UserGender").innerHTML = userGender;

    var userAgree = prompt("Do You Agree to our Terms? : ");
    document.getElementById("UserAgree").innerHTML = userAgree;

    document.querySelector('fieldset:nth-of-type(1)').style.display = 'block';
    document.querySelector('.StartButton').style.display = 'none'; 
    document.querySelector('.welcome').style.display = 'none';
    updateProgressBar(); 
    document.querySelector('.Step2Button ').style.display ='block'; 
}
function step2(){
    var userIntrest = prompt("Area of Study? ");
    document.getElementById("study").innerHTML = userIntrest;

    var userProperty= prompt("Degree?  : ");
    document.getElementById("degree").innerHTML = userProperty;

    var userBill = prompt("Enter your University?: ");
    document.getElementById("University").innerHTML = userBill;

    var userPlace = prompt("Completion? : ");
    document.getElementById("Completion").innerHTML = userPlace;

    var userLocation = prompt("Enter your Location : ");
    document.getElementById("Location").innerHTML = userLocation;

    document.querySelector('fieldset:nth-of-type(2)').style.display = 'block';
    document.querySelector('.Step2Button').style.display = 'none'; 
    document.querySelector('.welcome').style.display = 'none';
    updateProgressBar();
    document.querySelector('.Step3Button ').style.display ='block'; 
}

function step3(){
    var userMobile = prompt("Enter Your Phone Number : ");
    document.getElementById("Mobile").innerHTML = userMobile;

    var userEmail = prompt("Enter Your Email Adress : ");
    document.getElementById("Email").innerHTML = userEmail;

    var userLinked = prompt("Enter Your LinkedIn Id : ");
    document.getElementById("Linked").innerHTML = userLinked;

    var userCountry = prompt("What's the country : ");
    document.getElementById("Country").innerHTML = userCountry;

    // Show user profile details
    document.querySelector('fieldset:nth-of-type(3)').style.display = 'block';
    document.querySelector('.Step3Button').style.display = 'none';
    document.querySelector('.welcome').style.display = 'none';
    updateProgressBar();
    //Displaying the Button for Edit infomation
    document.querySelector('.UserEdit').style.display = 'block';
    document.querySelector('.Submit').style.display = 'block';
}
function Editstep1() {
    var userName = prompt("Enter Your Name: ");
    document.getElementById("UserName").innerHTML = userName;

    var userSurname = prompt("Enter Your Surname: ");
    document.getElementById("UserSurname").innerHTML = userSurname;

    var userAge = parseInt(prompt("Enter Your Age: "));
    document.getElementById("UserAge").innerHTML = userAge;

    var userGender = prompt("Enter Your Gender: ");
    document.getElementById("UserGender").innerHTML = userGender;

    var userAgree = prompt("Do You Agree to our Terms? : ");
    document.getElementById("UserAgree").innerHTML = userAgree;
}
function Editstep2(){
    var userIntrest = prompt("What types of renewable energy are you interested in? ");
    document.getElementById("intrests").innerHTML = userIntrest;

    var userProperty= prompt("Are you interested in installing a renewable energy system on your property?  : ");
    document.getElementById("Property").innerHTML = userProperty;

    var userBill = prompt("Enter your average monthly electricity bill : ");
    document.getElementById("Bill").innerHTML = userBill;

    var userPlace = prompt("Enter your Property Type : ");
    document.getElementById("Place").innerHTML = userPlace;

    var userLocation = prompt("Enter your Location : ");
    document.getElementById("Location").innerHTML = userLocation;
    DocumentTimeline.arguments.getElementById(".EditStep")
}
function Editstep3(){
    var userMobile = prompt("Enter Your Phone Number : ");
    document.getElementById("Mobile").innerHTML = userMobile;

    var userEmail = prompt("Enter Your Email Adress : ");
    document.getElementById("Email").innerHTML = userEmail;

    var userLinked = prompt("Enter Your LinkedIn Id : ");
    document.getElementById("Linked").innerHTML = userLinked;

    var userCountry = prompt("What's the country : ");
    document.getElementById("Country").innerHTML = userCountry;
    // Displaying buttons for editing data
    document.querySelector('.EditStep1').style.display = 'block';
}
function UserEditChoise(){
    //Move the submit button to the right of the web 
    document.querySelector('.Submit').style.marginLeft = '80%'; 
    //Hiding the getting user choise for edit button
    document.querySelector('.UserEdit').style.display = 'none';
    // Displaying buttons for editing data
    document.querySelector('.EditStep1').style.display = 'block';
    document.querySelector('.EditStep2').style.display = 'block';
    document.querySelector('.EditStep3').style.display = 'block';
}
function SubmitDetails(){
    //Hiding the editing buttons
    document.querySelector('.EditStep1').style.display = 'none';
    document.querySelector('.EditStep2').style.display = 'none';
    document.querySelector('.EditStep3').style.display = 'none';
    //Hiding the editing choise button and submit button if user submit without editing
    document.querySelector('.UserEdit').style.display = 'none';
    document.querySelector('.Submit').style.display = 'none';
    // Displaying the Porfile Created completely pop Up message
    document.querySelector('.popupwindow').style.display= 'block';
}
function PopUp(){
    //Hiding the pop up message after click dismiss
    document.querySelector('.popupwindow').style.display = 'none';
}


