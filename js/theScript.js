/*
    JS_BootStrap_Login
    JavaScript
    BootStrap 4 / HTML5 / CSS3 / JavaScript
    /Documents/GitHub/JS_BootStrap_Login/
    JavaScript functions - Andrew Harkins
*/

var theForm = document.getElementById("formsignin");
var startTime;

$(theForm).on("submit", function () {

    if (validateSubmit()) {
        var timerSection = '<div id="countdown"></div >';
        var successlogin = "<div><h4>You have logged in</h4><p>Congratulations you have entered the correct values.</p></div>";
        var alertText = "JavaScript/Bootstrap Success Alert - Login was successful for the project - JS_BootStrap_Login"
        // Success login pop-up alert.
        var successAlert = '<div class="alert alert-success alert-dismissible fade show" role="alert"><button type="button" ' +
            'class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</button>' + alertText +
            '\t<span class="glyphicon glyphicon-refresh" id="iconRefresh" data-toggle="tooltip" title="Click to refresh ' +
            'after 7.5 seconds"></span></div>';
        //document.getElementsByClassName("contentdiv").innerHTML = successlogin;
        document.getElementById("contentdiv").innerHTML = timerSection;
        document.getElementById("contentdiv").innerHTML += successlogin;
        document.getElementById("messageLogin").innerHTML = successAlert;
        // Add event to 'glyph refresh icon' in successAlert message.
        document.getElementById("iconRefresh").addEventListener("click", glyphCountdownRefresh);   
    }
});

function validateSubmit() {
    var emailtxt = document.getElementById("txtEmail").value;
    var pass = document.getElementById("txtPassword").value;
    var extraTxt = "";
    var alertText = "JavaScript/Bootstrap Danger Alert - Login was <strong>Unsuccessful</strong> please <u>try again</u> - JS_BootStrap_Login";
    // Danger login pop-up alert.
    var dangerAlert = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" ' +
        'class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</button>'+alertText;

    if (emailtxt != "" && pass != "") {
        if (pass.length > 5) {
            document.forms["formsignin"].submit();
            return true;
            
        } else {
            extraTxt = '<br>' + 'Password must be at least 6 characters.';
            document.getElementById("messageLogin").innerHTML = dangerAlert + extraTxt + '</div>';
            return false;
        }
    } else {
        extraTxt = "All fields are required to continue.";
        document.getElementById("messageLogin").innerHTML = dangerAlert + extraTxt + '</div>';
        return false;
    }
}

function glyphCountdownRefresh() {
    startTime = Date.now();
    var displayTimer = document.getElementById("countdown");
    var stopwatch = setInterval(function () {
        var accurateTime = Date.now() - startTime;
        displayTimer.innerHTML = '<h1><time>' + (accurateTime / 1000).toFixed(3) + '</time></h1>';
    }, 100);

    setInterval(function () {
        window.location.reload();
    }, 7500);
}