let submitButton = document.getElementById("submitButton");
let errors ={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
     errors ={};
   let signupForm = document.forms["signupForm"];
   let FirstNameInput= signupForm.FirstName;
   let LastNameInput= signupForm.LastName;
   let PasswordInput= signupForm.Password;
   let EmailInput= signupForm.Email;

   if (FirstNameInput.value==""){
    errors.FirstName ="Firstname Should not be empty";
   
   }
   if (LastNameInput.value==""){
    errors.LastName ="Lastname Should not be empty";
   
   }
   if(PasswordInput.value== ""){
    errors.Password= "Password should not be empty";
   }
   if(PasswordInput.value.length <= 5){
    errors.Password= "Minimum 6 character are needed"
   }
   if(EmailInput.value== ""){
    errors.Email = "Email should not be empty"
   }
   console.log(errors);
   
 

   for (let error in errors){
    let LastNameGroup = document.getElementById(`${error}Group`);
    let LastNameMessage = document.querySelector(`#${error}Group .message`);
    LastNameGroup.classList.add("error");
    LastNameMessage.textContent =errors[error];
   
   }

   if(Object.keys(errors).length == 0){
    signupForm.submit();
   }
});