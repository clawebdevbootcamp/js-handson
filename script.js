let users = [];
let sessions = [];
// Sign Up
document.getElementById("signup-btn").addEventListener("click", onSignUp);

function onSignUp(event) {
  // preventing form reload
  event.preventDefault();
  // Saving email and password from form inputs
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  // Testing email format
  let isEmailFormatCorrect = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  // Testing password format
  let isPasswordFormatCorrect = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );

  if (isEmailFormatCorrect) {
    if (isPasswordFormatCorrect) {
      // Email and Password match the Regex
      // We can Sign up user
      // Pushing user in the array
      users.push({
        email: email,
        password: password,
      });
    } else {
      alert("Password weak");
    }
  } else {
    alert("Wrong Email");
  }
}

document.getElementById("login-btn").addEventListener("click", onLogin);

function onLogin(event) {
  event.preventDefault();
  // Saving email and password from form inputs
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  // Approach 1 (The bad one because we are not intereted in all users from the array)

  // let success = false;
  // users.map((user, index) => {
  //   if (user.email == email) {
  //     if (user.password == password) {
  //       success = true;
  //       sessions.push({
  //         email: email,
  //         time: new Date(),
  //       });
  //       console.log("Logged in");
  //     }
  //   }
  // });
  // if (!success) {
  //   alert("Wrong Credentials");
  // }

  // Approach 2 (The better one)
  // Getting the element from the array that has the email from the form
  let user = users.filter((item) => item.email == email)[0];

  // Checkign if user exists
  if (user) {
    // checking if passwords match
    if (user.password == password) {
      // Saving the date/time of the login
      sessions.push({
        email: email,
        time: new Date(),
      });
      alert("Logged in");
    } else {
      alert("Wrong password");
    }
  } else {
    alert("User does not exist");
  }
}
