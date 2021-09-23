var d = new Date();
var n =d.getHours();
console.log(n);

var textArea = $(".textarea");

var textArray=[];
var planner = $("text")
planner.value=""

textArray.push(planner.value)

console.log(planner.value)


var save =$("saveBtn")

save.on("click",function(){

    console.log(planner.value)
    // textContent.push(planner);
    // localStorage.setItem("dailyPlan", json.stringify(textArray));

})



function colorChange()
{
    if(n===hour){
      textArea.css("background-color", "red")  
    }
}

var hour0 = $("#12AM")
hour0 = 0

var hour1 = $("#1AM")
hour0 = 1

var hour2 = $("#2AM")
hour2 =2

var hour3 = $("#3AM")
hour3 = 3

var hour4 = $("#4AM")
hour4 = 4

var hour5 = $("#5AM")
hour5 = 5

var hour6 = $("#6AM")
hour6 = 6

var hour7 = $("#7AM")
hour7 = 7

var hour8 = $("#8AM")
hour8 = 8

var hour9 = $("#9AM")
hour9 = 9

var hour10 = $("#10AM")
hour10 = 10

var hour11 = $("#11AM")
hour11 = 11

var hour12 = $("#12AM")
hour12 = 12

var hour13 = $("#1PM")
hour13

var hour14 = $("#2PM")
hour14 = 14

var hour15 = $("#3PM")
hour15 = 15

var hour16 = $("#4PM")
hour16 = 16

var hour17 = $("#5PM")
hour17 = 17

var hour18 = $("#6PM")
hour18 = 18

var hour19 = $("#7PM")
hour19 = 19

var hour20 = $("#8PM")
hour20 = 20

var hour21 = $("#9PM")
hour21 = 21

var hour22 = $("#10PM")
hour22 = 22

var hour23 = $("#11PM")
hour23 = 23

var hour =$(".hour")

var today = moment();
 $("#currentDay").text(today.format("MMM Do, YYYY"));

// var twelveAM = moment("12 AM", "hhA").format("hh A");
// $("#12AM").text(twelveAM);

// var oneAM = moment("1 AM", "hhA").format("hh A");
// $("#1AM").text(oneAM);

// var twoAM = moment("2 AM", "hhA").format("hh A");
// $("#2AM").text(twoAM);

// var threeAM = moment("3 AM", "hhA").format("hh A");
// $("#3AM").text(threeAM);

// var fourAM = moment("4 AM", "hhA").format("hh A");
// $("#4AM").text(fourAM);

// var fiveAM = moment("5 AM", "hhA").format("hh A");
// $("#5AM").text(fiveAM);

// var sixAM = moment("6 AM", "hhA").format("hh A");
// $("#6AM").text(sixAM);

// var sevenAM = moment("7 AM", "hhA").format("hh A");
// $("#7AM").text(sevenAM);

// var eightAM = moment("8 AM", "hhA").format("hh A");
// $("#8AM").text(eightAM);

// var nineAM = moment("9 AM", "hhA").format("hh A");
// $("#9AM").text(nineAM);

// var tenAM = moment("10 AM", "hhA").format("hh A");
// $("#10AM").text(tenAM);

// var elevenAM = moment("11 AM", "hhA").format("hh A");
// $("#11AM").text(elevenAM);

// var twelvePM = moment("12 PM", "hhA").format("hh A");
// $("#12PM").text(twelvePM);

// var onePM = moment("1 PM", "hhA").format("hh A");
// $("#1PM").text(onePM);

// var twoPM = moment("2 PM", "hhA").format("hh A");
// $("#2PM").text(twoPM);

// var threePM = moment("3 PM", "hhA").format("hh A");
// $("#3PM").text(threePM);

// var fourPM = moment("4 PM", "hhA").format("hh A");
// $("#4PM").text(fourPM);

// var fivePM = moment("5 PM", "hhA").format("hh A");
// $("#5PM").text(fivePM);

// var sixPM = moment("6 PM", "hhA").format("hh A");
// $("#6PM").text(sixPM);

// var sevenPM = moment("7 PM", "hhA").format("hh A");
// $("#7PM").text(sevenPM);

// var eightPM = moment("8 PM", "hhA").format("hh A");
// $("#8PM").text(eightPM);

// var ninePM = moment("9 PM", "hhA").format("hh A");
// $("#9PM").text(ninePM);

// var tenPM = moment("10 PM", "hhA").format("hh A");
// $("#10PM").text(tenPM);

// var elevenPM = moment("11 PM", "hhA").format("hh A");
// $("#11PM").text(elevenPM);


