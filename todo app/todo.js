$("#btn").on("click", function () {
    const emailvalidator = 
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    const email =$("Add your task").val;
    console.log(add);

    if (add) {
        $("#error").text("add your task!");
        isvalid = false;
      }

});