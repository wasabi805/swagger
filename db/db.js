import { Low, JSONFile } from 'lowdb';
var adapter = new JSONFile('db.json');
var db = new Low(adapter);
//Set db
db.data = db.data || {
    books: [{
            id: 'd5_kwZ934',
            title: 'Spawn',
            issueNumber: '7',
            artist: 'Todd McFarlane',
            writer: 'Allan Moore'
        }]
};
export default db;
