document.getElementById("work-history").addEventListener("click", function() {
    alert("Welcome to my work history section!");
  });
function toggleContactDetails() {
  var contactDetails = document.getElementById("contactDetails");
  if (contactDetails.style.display === "none") {
    contactDetails.style.display = "block";
  } else {
    contactDetails.style.display = "none";
  }
} 