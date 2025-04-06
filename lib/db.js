import Localbase from "localbase";

const db = new Localbase("maBaseLocale");

db.config.debug = false;

export default db;