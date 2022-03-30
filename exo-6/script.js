console.log("exercice 6");


function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$("#connect").click(function () {
    console.log("le bouton is clicked");
    var recupMail = $("#email").val();
    var recupPass = $("#password").val();

    if (recupMail.length == 0) {
        $("#warningMail").css("display", "block");
    } else if (!checkEmail(recupMail)) {
        $("#warningNotAMail").css("display", "block");
    }

    if (recupPass.length < 6) {
        if (recupPass.length == 0) {
            $("#warningPass").css("display", "block");
        }
        $("#warningMiniPass").css("display", "block");
    }

    if(recupMail == "hello@me.com" && recupPass =="secret8"){
        $("#successConnected").css("display", "block");
    }
    
    console.log(recupMail + " " + recupPass);
});
