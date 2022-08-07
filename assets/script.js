//console.log("ji")
var addEvent = $("#nineAMevent");
// var saveBtn = 

var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

function btnClicked(hour) {
    var input = $("#input" + hour);
    //console.log(input.val())

saveToLS(input);
}

//cat is recieving the value of input

function saveToLS(cat) {
    var printInput = cat.val();
    localStorage.setItem("event", printInput);
}