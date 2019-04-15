// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

 if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/modelodb';
 } else {
    urlDB = 'mongodb+srv://gorkiedu:rcNQruUVdqZKsFlv@cluster0-d2pir.mongodb.net/modelodb';
    
}
process.env.URLDB = urlDB;

