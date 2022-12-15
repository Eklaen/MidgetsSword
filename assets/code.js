function showImage(element) {
   document.querySelector("#img01").src = element.src;
   document.querySelector("#modal01").style.display = "block";
 };

function messageSent() {
  var field1 = document.querySelector("#name_field").value;
  var field2 = document.querySelector("#firstname_field").value;
  var field3 = document.querySelector("#server_field").value;
  var field4 = document.querySelector("#email_field").value;
  var field5 = document.querySelector("#message_field").value;

  if ( field1 == "" || field2 == "" || field3 == "" || field5 == "") {
    alert("Some fields are missing. The Mogs could not take your message.");
  } else {
    alert("Thank you, " + field2 + " " + field1 +". The Mogs have taken your message to the proprietor of the establishment!");
  }
};

var card = document.querySelector('.card');
card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});
