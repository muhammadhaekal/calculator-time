var date = new Date()
var intDate = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()

console.log("------------- level 1 -------------");
console.log(`full date = ${date}`);
console.log(`date = ${intDate}`);
console.log(`month = ${month}`);
console.log(`year = ${year}`);


console.log("------------- level 2 -------------");

function getDate(date){
  return date.getDate();
}

function getMonth(date){
  month = date.getMonth()

  return month;
}

function getStringMonthFromDate(date){
  month = date.getMonth()
  monthLists = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  return monthLists[month];
}

function getStringMonthFromInt(int){
  monthLists = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  return monthLists[int];
}
console.log(getStringMonthFromDate(date));

console.log("------------- level 3 -------------");
console.log(getStringMonthFromInt(getMonth(date)))
