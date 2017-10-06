function createMultTable() {
  var i, factor, html;

  // Get the value of the input field with id="factor"
  factor = document.getElementById("factor").value;

  // If input is Not a Number
  if (isNaN(factor)) {
    html = "Input is not a number";
  // Factor cannot be less than 1
  } else if (factor < 1) {
    html = "Input cannot be less than 1";
  } else {
    i = 0;
    //add the opening table tag
    html = "<table border='1'>";
    
    do {
      // add the tr tag for the row
      html += "<tr>";

      for (var j = 0; j <= factor; j++){
        // add the columns
        if (i == 0 && j == 0){
          html += "<td bgcolor='#d3d3d3'>X</td>";
        } else if (i == 0 && j > 0){
          html += "<td bgcolor='#d3d3d3'>"+ j + "</td>";
        } else if (i > 0 && j == 0){
          html += "<td bgcolor='#d3d3d3'>"+ i + "</td>";
        } else {
          html += "<td>"+ (i*j) + "</td>";
        }
      }
      // add the closing tr tag for the row
      html += "</tr>";
      i++;
    }
    while (i <= factor);

    //add the closing table tag
    html += "</table>"
  }
  //Display Multiplication Table
  document.getElementById("multiTable").innerHTML = html;
}