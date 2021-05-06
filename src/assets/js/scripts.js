console.log("Custom User Interface (CUI) development");


// login event Handler

const loginFormElm = document.querySelector('#LoginFormElm');
const loginMsgContainer = document.querySelector('#loginMsgContainer');

//success handler
loginFormElm.addEventListener('loginSuccess', function (eventData) {
    console.log(eventData)
    loginMsgContainer.innerHTML = '<span class="text-success" role="alert"> Login successful! </span>';

})

//Error handler
loginFormElm.addEventListener('loginError', function (eventData) {
    console.log(eventData)
    const errorMessage = eventData['detail']['error']['__exception_msg__'];
    loginMsgContainer.innerHTML = '<span class="text-danger" role="alert">'+errorMessage+' </span>';

})