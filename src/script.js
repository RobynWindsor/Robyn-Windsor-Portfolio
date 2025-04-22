
    var now = new Date(); // Get the current date and time
    var day = ("0" + now.getDate()).slice(-2); // Get the day and format it as 2 digits
    var month = ("0" + (now.getMonth() + 1)).slice(-2); // Get the month and format it as 2 digits
    var year = now.getFullYear(); // Get the full year
    var hours = ("0" + now.getHours()).slice(-2); // Get the hours and format it as 2 digits
    var minutes = ("0" + now.getMinutes()).slice(-2); // Get the minutes and format it as 2 digits
  
    // Return the formatted date and time
    console.log( day + "-" + month + "-" + year + " " + hours + ":" + minutes);

  