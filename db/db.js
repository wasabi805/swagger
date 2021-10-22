import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'path';
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
var file = join(__dirname, 'db.json');
var adapter = new JSONFile(file);
// Create new db
export var db = new Low(adapter);
