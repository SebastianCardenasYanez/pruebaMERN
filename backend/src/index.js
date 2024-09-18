const app = require("./app");
require("./helpers/database");


const main = async() => {
    await app.listen(app.get("port"));
    console.log("el server se esta ejecutando", app.get("port"));
}

main();  