//sets current date and time
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY mm:ss"));

// sets variable for current hour to be used in comparison to time slot on daily planner
var now = moment().format("H");
console.log(now)

var textArea = $("textarea");
var saveBtn = $(".saveBtn");
 
// Sets variables to time to determine if the time is before the current time (boolean)
var hour9 = moment(9,"H").isBefore();
console.log (hour9);

var hour10 = moment(10,"H").isBefore();
console.log(hour10);

var hour11=moment(11,"H").isBefore();
console.log(hour11)


var hour12 = moment(12,"H").isBefore();
console.log(hour12)


var hour13 = moment(13,"H").isBefore();
console.log(hour13)


var hour14 = moment(14,"H").isBefore();
console.log(hour14)


var hour15 = moment(15,"H").isBefore();
console.log(hour15)

var hour16 = moment(16,"H").isBefore();
console.log(hour16)

var hour17 = moment(17,"H").isBefore();
console.log(hour17)

//create an array of the boolean values
var hourTime=[hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

//use boolean values to alter the class stylings via conditional statements
textArea.each(function(i) {
    var time = hourTime[i];
    var currentTime = ($(this).parent().attr("id"));

    if(currentTime == now){
        $(this).toggleClass("present");
    }
    else if (time){
        $(this).toggleClass("past");
    }   
    else{
        $(this).toggleClass("future");
    }
    //^^^^present is still not working

    //writes the stored data of reminders to the page
    $(this).val(localStorage.getItem(currentTime))
})


saveBtn.on("click",storeReminders);

//stores the reminders to local storage with key and value
function storeReminders(){
    var reminders = ($(this).siblings('textarea').val());
    var dayHour = ($(this).parent().attr("id"));

    localStorage.setItem(dayHour, reminders);
}