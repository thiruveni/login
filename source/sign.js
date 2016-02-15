var db;
var dbCreated = false;
 
document.addEventListener("deviceready", onDeviceReady, false);
 
function onDeviceReady() {

 var sign = document.getElementById("sign").value;
 
 db = window.openDatabase("SignatureDB", "1.0", "Signature", 200000);
 if (dbCreated)
 {
	 db.transaction(populateDB, transaction_error, populateDB_success);
 }
 
else
{
	db.transaction(populateDB, transaction_error, populateDB_success);
}
  
}
 
function populateDB(tx) {
 tx.executeSql('DROP TABLE IF EXISTS Signature');
 var sql = "CREATE TABLE IF NOT EXISTS Signature ( "+ "usersign VARCHAR(255))";
 tx.executeSql(sql);
var sign = document.getElementById("sign").value;
 tx.executeSql("INSERT INTO Signature (usersign) VALUES ('"+ sign +"' )");
  
}
 
function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
   
function populateDB_success() {
 dbCreated = true;
  
 // where you want to move
 alert("Successfully inserted");
  window.location="index.html";
}