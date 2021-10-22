import { Low, JSONFile } from 'lowdb';
var adapter = new JSONFile('db.json');
// Create new db
var db = new Low(adapter);
export default { db: db };
