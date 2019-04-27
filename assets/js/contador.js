
var contest = moment.tz("2019-10-19 09:00", "America/Brasilia");



var newYear = new Date(); 
newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 


$('#clock.simple').countdown({ date: contest });

$('#clock.styled').countdown({
  date: contest,
  render: function(data) {
      $("#days").html(this.leadingZeros(data.days, 3).slice(1)); 
      $("#hours").html(this.leadingZeros(data.hours, 2));
      $("#minutes").html(this.leadingZeros(data.min, 2));
      $("#seconds").html(this.leadingZeros(data.sec, 2));
  }
});
