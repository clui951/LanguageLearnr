function handleRequest() {
  if (travel.checked && !("Travel" in categoriesList)) {
  	var data = {};
  	data["fields"] = {};
  	data["fields"]["Name"] = "Travel";
  	httpPost("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201", JSON.stringify(data));
  } else if (!travel.checked && "Travel" in categoriesList) {
  	httpDelete("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201/" + categoriesList["Travel"]);
  }

  if (sports.checked && !("Sports" in categoriesList)) {
  	var data = {};
  	data["fields"] = {};
  	data["fields"]["Name"] = "Sports";
  	httpPost("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201", JSON.stringify(data));
  } else if (!sports.checked && "Sports" in categoriesList) {
  	httpDelete("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201/" + categoriesList["Sports"]);
  }

  if (fashion.checked && !("Fashion" in categoriesList)) {
  	var data = {};
  	data["fields"] = {};
  	data["fields"]["Name"] = "Fashion";
  	httpPost("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201", JSON.stringify(data));
  } else if (!fashion.checked && "Fashion" in categoriesList) {
  	httpDelete("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201/" + categoriesList["Fashion"]);
  }

  return false;
}