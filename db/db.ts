import { Request } from "express";
import { Low, JSONFile } from 'lowdb'

type Data ={
    books: Object[]
}

export interface appReq extends Request{
    books: Data
}

const adapter = new JSONFile<Data>('db.json')

const db = new Low(adapter)
//Set db
db.data = db.data || { 
    books: [{id: 'me' , name: 'tim'}] 
}


export default db  







