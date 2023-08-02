import toast from "react-hot-toast";

//validate login page
export async function usernameValidate(values) {
  const error = usernameVerify({}, values);
  return error;
}

// validate Password

export async function passwordValidate(values) {
  const error = passwordVerify({}, values);
  return error;
}

//validate  Reset password //
export async function resetPasswordValidate(values) {
  const error = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    error.exist = toast.error("Password Not Match");
  }
  return error;
}


/** validate profile page */
export async function profileValidation(values){
  const errors = emailVerify({}, values);
  return errors;
}

// validate Regster Form 
export async function registerValidate (values){
  const error = usernameVerify({},values);
  passwordVerify(error, values);
  emailVerify(error, values);

  return error;
}

//  validate password Check for Types

function passwordVerify(error = {}, values) {
  const specilaChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ ;

  if (!values.password) {
    error.password = toast.error("Password Required");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more the 4 character");
  } else if (!specilaChar.test(values.password)) {
    error.password = toast.error(
      "password must have Special Characters @ # $ % ^ & * ( ) _ + !"
    );
  }
  return error;
}

//  validate user

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("User Name Required");
  } else if (values.username.includes("")) {
    error.username = toast.error("Invalid Username");
  }
  return error;
}

// validate email

function emailVerify(error ={}, values){
  if(!values.email){
      error.email = toast.error("Email Required...!");
  }else if(values.email.includes(" ")){
      error.email = toast.error("Wrong Email...!")
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      error.email = toast.error("Invalid email address...!")
  }

  return error;
}
