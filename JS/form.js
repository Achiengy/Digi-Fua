const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  estimatePrice(e);
  e.preventDefault();
});
function estimatePrice(e) {
  var location1 = document.getElementById("Multimedia").value;
  var location2 = document.getElementById("ANU").value;
  var location3 = document.getElementById("CU").value;
  var location4 = document.getElementById("coop").value;
  var location5 = document.getElementById("ron").value;
  var range1 = document.getElementById("twenty").value;
  var range2 = document.getElementById("thirty").value;
  var range3 = document.getElementById("forty").value;
  var range4 = document.getElementById("fifty").value;
  var price = "";
  if (location1 == "Multimedia" && range1 == "Less-than-twenty-Pieces") {
    price = "Ksh.350";
  } else if (
    location1 == "Multimedia" && range2 == "twenty-thirty-Pieces"
  ) {
    price = "Ksh.400";
  } else if (location1 == "Multimedia" && range3 == "thirty-forty-Pieces") {
    price = "Ksh.450";
  } else if (location1 == "Multimedia" && range4 == "forty-fifty-Pieces") {
    price = "Ksh.500";
  } else if (
    location2 == "Nazarene" && range1 == "Less-than-twenty-Pieces"
  ) {price = "Ksh.400";
  } else if (location2 == "Nazarene" && range2 == "twenty-thirty-Pieces") {
    price = "Ksh.450";
  } else if (location2 == "Nazarene" && range3 == "thirty-forty-Pieces") {
    price = "Ksh.500";
  } else if (location2 == "Nazarene" && range4 == "forty-fifty-Pieces") {
    price = "Ksh.550";
  } else if (
    location3 == "Catholic" && range1 == "Less-than-twenty-Pieces"
  ) {
    price = "Ksh.430";
  } else if (location3 == "Catholic" && range2 == "twenty-thirty-Pieces") {
    price = "Ksh.480";
  } else if (location3 == "Catholic" && range3 == "thirty-forty-Pieces") {
    price = "Ksh.530";
  } else if (location3 == "Catholic" && range4 == "forty-fifty-Pieces") {
    price = "Ksh.580";
  } else if (
    location4 == "Cooperative" && range1 == "Less-than-twenty-Pieces"
  ) {
    price = "Ksh.450";
  } else if (location4 == "Cooperative" && range2 == "forty-fifty-Pieces") {
    price = "Ksh.500";
  } else if (location4 == "Cooperative" && range3 == "thirty-forty-Pieces"
  ) {price = "Ksh.550";
  } else if (location4 == "Cooperative" && range4 == "forty-fifty-Pieces") {
    price = "Ksh.600";
  } else if (
    location5 == "Rongai" && range1 == "Less - than - twenty - Pieces"
  ) {
    price = "Ksh.250";
  } else if (location5 == "Rongai" && range2 == "twenty-thirty-Pieces") {
    price = "Ksh.300";
  } else if (location5 == "Rongai" && range3 == "thirty-forty-Pieces") {
    price = "Ksh.350";
  } else if (location5 == "Rongai" && range4 == "forty-fifty-Pieces") {
    price = "Ksh.400";
  }
  if (range1 == "Less-than-twenty-Pieces") {
    price = "Ksh.200";
  } else if (range2 == "twenty-thirty-Pieces"
  ) { price = "Ksh.250";
  } else if (range3 == "thirty-forty-Pieces") {
    price = "Ksh.300";
  } else if (range4 == "forty-fifty-Pieces") {
    price = "Ksh.350";}
  var pay = document.getElementById("pay");
  pay.textContent = price;
}