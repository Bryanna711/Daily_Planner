// var d = new Date();
// var n =d.getHours();
// console.log(n);

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY mm:ss"));

var now = moment().format("H");

var hourClass = $(".hour");
var textArea = $("textarea");
var saveBtn = $(".saveBtn");
// 
// var hour9 = $("9")
var hour9 = moment(9,"H").isBefore();
console.log (hour9);

// var hour10 = $("10")
var hour10 = moment(10,"H").isBefore();
console.log(hour10);

// var hour11 = $("11")
var hour11=moment(11,"H").isBefore();
console.log(hour11)

// var hour12 = $("12")
var hour12 = moment(12,"H").isBefore();
console.log(hour12)

// var hour13 = $("1")
var hour13 = moment(13,"H").isBefore();
console.log(hour13)

// var hour14 = $("2")
var hour14 = moment(14,"H").isBefore();
console.log(hour14)

// var hour15 = $("3")
var hour15 = moment(15,"H").isBefore();
console.log(hour15)

// var hour16 = $("4")
var hour16 = moment(16,"H").isBefore();
console.log(hour16)

// var hour17 = $("5")
var hour17 = moment(17,"H").isBefore();
console.log(hour17)

var hourTime=[hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];


textArea.each(function(i) {
    var time = hourTime[i];
    var currentTime = $(this).parent().attr("id");

    if(currentTime == now){
        $(this).toggleclass("present");
    }
    else if (time){
        $(this).toggleClass("past");
    }   
    else{
        $(this).toggleClass("future");
    }
    //^^^^present is still not working
})


saveBtn.on("click",function(event){
console.log($(this).siblings('textarea').val());
;
  textArea.textContent = textArea.value ;
   localStorage.setItem("reminders",textArea.value);
    }
 )
// ^^^^^textArea.value is undefined....????
textArea.on("input",function (event){
    console.log(event.target.value);
;
    
})


