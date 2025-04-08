import localbase from "localbase";

const db = new localbase("maBaseLocale");

db.config.debug = false;

export default db;