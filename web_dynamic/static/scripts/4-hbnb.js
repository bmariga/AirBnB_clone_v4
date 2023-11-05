$(document).ready(function () {
  // Create an empty object to store amenities with their status (checked or unchecked)
  const amenities = {};

  // Listen for changes on all input checkboxes
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      // If a checkbox is checked, add it to the 'amenities' object with the 'data-id' as the key and 'data-name' as the value
      amenities[$(this).attr("data-id")] = $(this).attr("data-name");
    } else {
      // If a checkbox is unchecked, remove it from the 'amenities' object using 'data-id' as the key
      delete amenities[$(this).attr("data-id")];
    }

    // Update the text inside the <h4> tag within the 'div.amenities' with the list of selected amenities
    $(".amenities H4").text(Object.values(amenities).join(", "));
  });

  // Listen for a click on any BUTTON element
  $("BUTTON").click(function () {
    // Output the selected amenities in JSON format to the console
    console.log(JSON.stringify(amenities));

    // You may add an AJAX request here to send the selected amenities to the server
  });
});
