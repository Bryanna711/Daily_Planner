var d = new Date();
var n =d.getHours();
console.log(n);

var now = moment().format("H")

var hourClass = $(".hour");
var textArea = $("textarea")

textArea.each(function(){
    if(now>9){($(this).addClass("past"))}
    else if (now<9){($(this).addClass("future"))}
})


// var textArea = $(".textarea");

// var textArray=[];
// var planner = $("text")
// planner.value=""

// textArray.push(planner.value)

// console.log(planner.value)


// var save =$("saveBtn")

// 



// function colorChange()
// {
//     if(n===hour){
//       textArea.css("background-color", "red")  
//     }
// }



function colorChange(){
var d = new Date();
var n = d.getHours();
if(n >= 9 && n <= 17){
    $(".text").addClass("present");
}
else if(hourClass < 9){
    $(".text").addClass("past");
}
else{
    $(".text").addClass("future");
}
}

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

