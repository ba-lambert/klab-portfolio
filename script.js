
function GEEKFORGEEKS() {
    var name =
        document.forms.msgform.name.value;
    var email =
        document.forms.msgform.email.value;
    var message =
        document.forms.msgform.msg.value;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;							 // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;								 // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (message == ""|| regName.test(name)) {
        alert("Please enter valid phone number.");
        message.focus();
        return false;
    }
    return true;
}

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }