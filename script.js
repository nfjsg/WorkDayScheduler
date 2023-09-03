$(function () {
  var currentHour = dayjs().hour();

  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userText);
  });

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
    var savedText = localStorage.getItem($(this).attr("id"));
    if (savedText) {
      $(this).find(".description").val(savedText);
    }
  });
});
