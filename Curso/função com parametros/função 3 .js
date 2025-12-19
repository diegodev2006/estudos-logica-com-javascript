
createStringConnection("db_products", "Diego", "1234")


function createStringConnection(databaseName,user,pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}
`)
 }