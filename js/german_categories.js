function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.setRequestHeader("Authorization", "Bearer keyDUejYRdiQpO62z");
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

function httpPost(theUrl, data)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
  xmlHttp.setRequestHeader("Authorization", "Bearer keyDUejYRdiQpO62z");
  xmlHttp.setRequestHeader('Content-Type', 'application/json');
  xmlHttp.send( data );
  return xmlHttp.responseText;
}

function httpDelete(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "DELETE", theUrl, false ); // false for synchronous request
  xmlHttp.setRequestHeader("Authorization", "Bearer keyDUejYRdiQpO62z");
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

var res = httpGet("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201?maxRecords=3&view=Grid%20view");
var resJSON = JSON.parse(res);
var resList = resJSON["records"];

console.log(res);

var categoriesList = {};

for (var i = 0; i < resList.length; i++) {
	var id = resList[i]["id"];
	var categoryName = resList[i]["fields"]["Name"];
	categoriesList[categoryName] = id;
}

// document.getElementById("checkbox").checked = true;

var x = document.getElementsByClassName("category-box");

var travel = document.getElementById("travel-checkbox");
var sports = document.getElementById("sports-checkbox");
var fashion = document.getElementById("fashion-checkbox");

if (travel.nextSibling.textContent.trim() in categoriesList) {
	travel.checked = true;
}

if (sports.nextSibling.textContent.trim() in categoriesList) {
	sports.checked = true;
}

if (fashion.nextSibling.textContent.trim() in categoriesList) {
	fashion.checked = true;
}