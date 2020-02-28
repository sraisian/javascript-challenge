// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// column for date/time, city, state, country, shape, and comment
// Loop Through `data` and console.log each ufo report object

function tableDisplay(data){
  tbody.text(""); 
  data.forEach(function(report){
    // Append a new row in the `tr` elements.
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each ufo report value to test 
    Object.entries(report).forEach(([key, value]) => {
      // Log the key and value
      //console.log(key, value);
    // Use d3 to append 1 cell per ufo report value (date/time, city, state, country, shape, and comment)
      var cell = row.append("td");
      cell.text(value);
      })
  })
}
//create table by calling function
tableDisplay(tableData);

//FILTER BUTTON SECTION: 

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

function clickInput(){
  //don't refresh page
  d3.event.preventDefault();
  //print the value that was input
  console.log(inputField.property("value"));
  //create a new table showing only the filterd data
  var new_table = tableData.filter(inquiry => inquiry.datetime===inputField.property("value"));
  //display the new table
  tableDisplay(new_table); 
}
//call function when button clicked
button.on("click",clickInput);