// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// column for date/time, city, state, country, shape, and comment
// Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(report){
    console.log(report);
})

  
// Use d3 to append one table row `tr` for each ufo report object
data.forEach(function(report){
// Append a new row in the `tr` elements.
    var row = tbody.append("tr");
// Use `Object.entries` to console.log each ufo report value
    Object.entries(report).forEach(([key, value]) => {
        // Log the key and value
        console.log(key, value);
// Use d3 to append 1 cell per ufo report value (date/time, city, state, country, shape, and comment)
        var cell = row.append("td");
        cell.text(value);
    })
})


//write JavaScript code that will listen for events and 
//search through the date/time column to find rows that match user input.
 
// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});


// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
    //whatever entered and store it into a var
  var newText = d3.event.target.value;
  button.on("click", function(){
      //outputbox.text(""); <- clear out existing data
    //when clicking, will filter the table values to newText date filter
    //filter table results from prior ex or form filter exercise?
    // ADD CODE HERE TO FILTER 
    // 1. delete all tr in tbody
    // 2. forEach event where datetime === inputed date, append row with data
  })
  // and log inputed text, why not
  console.log(newText);
});



//filtering?
// // Create a custom filtering function, have date filter be parameter
// function selectYounger(person) {
//     return person.age < 30;
//   }
  
//   // filter() uses the custom function as its argument
//   var youngSimpsons = simpsons.filter(selectYounger);