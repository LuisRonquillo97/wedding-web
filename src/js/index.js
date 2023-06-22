const date = new Date(2023, 7, 19, 18, 30);
function GetTimeRemaining(){
  var delta = new Date(date - new Date());
  return {
    months: delta.getMonth(),
    days: delta.getDate(),
    hours: delta.getHours(),
    minutes: delta.getMinutes(),
    seconds: delta.getSeconds()
  }
}