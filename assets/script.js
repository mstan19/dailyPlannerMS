var weekDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(weekDay);


//time
function checkTime() {
const listOfTime = {
    background09: 9,
    background10: 10,
    background11: 11,
    background12: 12,
    background13: 13,
    background14: 14,
    background15: 15,
    background16: 16,
    background17: 17,
};

var currentHour = moment().hour();
//$(".row").removeClass(".present .past .future");
for (const key in listOfTime) {
    var backgroundEl = $("#" + key)
    if (listOfTime[key] === currentHour) {
        //var idBackground = $("#input" + hour);
        //console.log(idBackground);
        backgroundEl.css("background-color", "#ff6961");
    } else if (listOfTime[key] < currentHour) {
        backgroundEl.css("background-color", "#d3d3d3");
    } else {
        backgroundEl.css("background-color", "#77dd77");
    }
}
}
checkTime();

$(".sizeBtn").on("click", function(event){
    event.preventDefault();
    var txt = $(this).parent().siblings(".col-10").children().val();
    console.log(txt);
    var time = $(this).parent().siblings(".col-1").text();
    console.log(time);
    localStorage.setItem(time, txt);
})

$("#input9").val(localStorage.getItem("9 am"));
$("#input10").val(localStorage.getItem("10 am"));
$("#input11").val(localStorage.getItem("11 am"));
$("#input12").val(localStorage.getItem("12 pm"));
$("#input13").val(localStorage.getItem("1 pm"));
$("#input14").val(localStorage.getItem("2 pm"));
$("#input15").val(localStorage.getItem("3 pm"));
$("#input16").val(localStorage.getItem("4 pm"));
$("#input17").val(localStorage.getItem("5 pm"));



