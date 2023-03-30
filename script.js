let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click",function(e) {
  e.preventDefault();
    let signupForm = document.forms["signupForm"];
  
  let FirstNameInput = signupForm.FirstName;
  let LastNameInput = signupForm.LastName;


  if(FirstNameInput.value == ""){
    errors.FirstName = "Firstname SHoul not be empty";
    //let FirstNameGroup = document.getElementById("FirstNameGroup");
    //FirstNameMessage = document.querySelector("#FirstNameGroup .message");

    //FirstNameGroup.classList.add("error");
    //FirstNameMessage.textContent = "Firstname Should not be empty";
  }
  if(LastNameInput.value == ""){
    errors.LastName = " Lastname should Not be empty";
    //let LastNameGroup = document.getElementById("LastNameGroup");
    //LastNameMessage = document.querySelector("#LastNameGroup .message");

    //LastNameGroup.classList.add("error");
    //LastNameMessage.textContent = "Lastname Should not be empty";
  }
  comsole.log(errors);
  for (let error in errors){

  }

 // console.log(FirstNameInput.value);
  //let LastNameInput = signupForm.LastName;
  //console.log(LastNameInput.value);
  //let EmailInput = signupForm.Email;
  //console.log(EmailInput.value);
  //let PasswordInput = signupForm.Password;
  //console.log(PasswordInput.value);

});
