var button = document.querySelector('#submit-button');
var $errBox = $('#error-box');
var $successBox = $('#success-box');

function displayMessage(box, message) {
  box.html(message);
  box.removeClass('hidden');
}

function clearMessage(box) {
  box.html('');
  box.addClass('hidden');
}

braintree.dropin.create({
  authorization: 'sandbox_f252zhq7_hh4cpc39zq4rgjcg',
  selector: '#dropin-container'
}, function (createErr, instance) {
  if (createErr) {
    displayMessage($errBox, createErr.message);
    return;
  }
  button.addEventListener('click', function () {
    clearMessage($errBox);
    clearMessage($successBox);
    
    instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
      if (requestPaymentMethodErr) {
        displayMessage($errBox, requestPaymentMethodErr.message);
        return;
      }
      
      displayMessage($successBox, 'Payment successful.Thank you for your payment');
      // 'Send Payment Method Nonce (' + payload.nonce + ') to your server.');
      displayMessage($errBox, 'Payment Unsuccesful.Please try agian.');
    });
  });
});