$("#btn").on("click", function () {
  const emailvalidator =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const passwordvalidator =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const email =$("email").val;
  const password = $("password").val;
  const conform_password = $("conform_password").val;
  let isvalid = true;

  console.log(email);
  console.log(password);
  console.log(conform_password);

  if (email === "" || !emailvalidator.test(email)) {
    $("#error").text("email is invalid!");
    isvalid = false;
  }
  if (
    password == "" ||
    conform_password == " " ||
   ! passwordvalidator.test(password)
  ) {
    isvalid = false;
    $("#error2").text("password not  accepted!");
  }
  if (password != conform_password) {
    isvalid = false;
    $("#error2").text("password not sam!");
  }
  if (isvalid) {
    $("#status").text("sing up successfully");
  }
  else
  {
     $("#status").text("sing up faild!");
  }

  console.log("passed!");
});
