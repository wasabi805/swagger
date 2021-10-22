import { Low, JSONFile } from 'lowdb';

type Data ={
    books: Object[]
}
const adapter = new JSONFile<Data>('db.json')

// Create new db
const db = new Low <Data> ( adapter )

export default { db } 







