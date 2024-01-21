function submitForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate form fields
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  // You can add additional validation here if needed

  // Construct the email body
  var emailBody = "Name: " + name + "\n";
  emailBody += "Email: " + email + "\n";
  emailBody += "Message: " + message;

  // For demonstration purposes, let's log the email body to the console
  console.log("Email Body:\n" + emailBody);

  // You can send the email using an AJAX request or your preferred method
  // This example just logs the email body to the console
  alert("Form submitted successfully!");
}
