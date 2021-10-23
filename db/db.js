import { Low, JSONFile } from 'lowdb';
var adapter = new JSONFile('db.json');
var db = new Low(adapter);
//Set db
db.data = db.data || {
    books: [{ id: 'me', name: 'tim' }]
};
export default db;
