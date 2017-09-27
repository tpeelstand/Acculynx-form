var email = 1;
function add_email() {
    email++;
    var objTo = document.getElementById('email-wrapper')
    var createEmail = document.createElement("div");
    createEmail.innerHTML = '<label for="email">Email ' + email +'</label><input class="email" type="text" id="email" placeholder="Additional Email" />';
    
    objTo.appendChild(createEmail)
}