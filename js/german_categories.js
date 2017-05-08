function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", "Bearer keyDUejYRdiQpO62z");
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var res = httpGet("https://api.airtable.com/v0/appzAhnNiUb6ky3nW/Table%201?maxRecords=3&view=Grid%20view");
console.log(res);
