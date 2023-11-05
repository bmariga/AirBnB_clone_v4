// Wait for the document to be fully loaded
$("document").ready(function () {
  // Define the URL of the API endpoint
  const url = "http://0.0.0.0:5001/api/v1/status/";

  // Send a GET request to the API endpoint
  $.get(url, function (data) {
    if (data.status === "OK") {
      // If status "OK," add class "available" to element w/ id "api_status"
      $("#api_status").addClass("available");
    } else {
      // If status not "OK," remove class "available"
      $("#api_status").removeClass("available");
    }
  });
});
