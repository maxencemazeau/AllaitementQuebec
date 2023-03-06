const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080


app.listen(port, () => console.log('Listen on port ' + port))
//Mysql

app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'Allaitement'
});
    res.locals.connection.connect();
    next();
});

const corsOptions ={
    origin:'*', 
    method : 'GET,PUT,POST,DELETE,OPTIONS',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// JSON body parser, there is no `extended` option here
//app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// URL-encoded body parser
//app.use(express.urlencoded({ limit: "20mb", extended: false }));


//API pour gérer les ACTIVITES

app.get('/activite', function(req, res, next){ 
    res.locals.connection.query('Select * from activite', function(error, results, fields){
        if (error) throw error;
        res.json(results);
    })
});

app.post('/creerActivite', (req, res) => {
    const { nomEvent, description, tarif, platforme, lieu } = req.body;
    const sql = 'INSERT INTO activite (nomEvent, description, tarif, platforme, lieu) VALUES (?, ?, ?, ?, ?)';
    res.locals.connection.query(sql, [nomEvent, description, tarif, platforme, lieu], (err, result) => {
      if (err) {
        console.error('Error inserting data: ', err);
        res.status(500).send('Error inserting data');
        return;
      }
      console.log('Data inserted');
      res.send('Data inserted');
    });
  });

  app.delete('/deleteActivite/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM activite WHERE id = ?`;
  res.locals.connection.query(sql, [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error deleting event');
    } else {
      res.send(`Activite with ID ${id} deleted successfully`);
    }
  });
});

//API pour gérer le CHAT

app.get('/chat', function(req, res, next){ 
  res.locals.connection.query('Select * from chat', function(error, results, fields){
      if (error) throw error;
      res.json(results);
  })
});

app.put('/chatFini/:id', function(req, res){
  const id = req.params.id;
  const dateFin = new Date();

  const sql = `UPDATE chat SET dateFin = ? WHERE id = ?`;
  res.locals.connection.query(sql, [dateFin, id], (err, results) => {
    if (err) {
      console.error('Error updating data: ', err);
      res.status(500).send('Error updating data');
      return;
    } else {
      res.send();
    }
  })
});

app.post('/creerChat', (req, res) => {
  // const{ idParent } = req.body;
  const dateDebut = new Date();
  const sql = 'INSERT INTO chat (dateDebut) VALUES (?)';
  res.locals.connection.query(sql, [dateDebut], (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted');
    res.send();
  });
});

//API pour gérer la DISCUSSION

app.get('/discussion/:idParent', (req, res) =>{
    const idParent = req.params.idParent;
    const query = 'SELECT message, moment FROM discussion d INNER JOIN chat c ON d.idChat = c.id WHERE c.idParent = ? ORDER BY d.moment';
    res.locals.connection.query(query, [idParent], (error, results) => {
        if (error) throw error;
        res.json(results);
      });
});

app.post('/postDiscussion', (req, res) =>{
  const idChat = 64;
  const moment = new Date();
  const { message } = req.body;
  const sql = 'INSERT INTO discussion (message, moment, idChat) values(?, ?, ?)';
  res.locals.connection.query(sql, [message, moment, idChat], (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted');
    res.send();
  });
});


//API CONNEXION PARENT

app.post('/connexionParent', function(req, res){
  const { login, password } = req.body;
  
  // SQL query to check if user exists and password is correct
  const query = `SELECT * FROM parent WHERE login = '${login}' AND password = '${password}'`;

  // Execute the SQL query
  res.locals.connection.query(query, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    } else if (rows.length == 0) {
      res.status(401).send('Invalid username or password');
    } else {
      const parent = rows[0];
      // Successful login, send back the user data
      res.send({
        id: parent.id,
        login: parent.login,
        nom: parent.nom});
    }
  });
});


app.post('/connexionBenevole', function(req, res){
  const { login, password } = req.body;
  
  // SQL query to check if user exists and password is correct
  const query = `SELECT * FROM benevole WHERE login = '${login}' AND password = '${password}'`;

  // Execute the SQL query
  res.locals.connection.query(query, function(err, rows) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    } else if (rows.length == 0) {
      res.status(401).send('Invalid username or password');
    } else {
      const parent = rows[0];
      // Successful login, send back the user data
      res.send({
        id: parent.id,
        login: parent.login,
        nom: parent.nom});
    }
  });
});


app.get('/obtenirChat', function(req, res, next){ 
  res.locals.connection.query('Select id, dateDebut from chat', function(error, results, fields){
      if (error) throw error;
      res.json(results);
  })
});

app.get('/discussionBenevole/:idChat', (req, res) =>{
  const idChat = req.params.idChat;
  const query = 'SELECT message, moment FROM discussion  WHERE idChat ='+idChat +' ORDER BY moment';
  res.locals.connection.query(query, [idChat],(error, results) => {
      if (error) throw error;
      res.json(results);
    });
});

app.post('/api/benevole/envoiMessage', (req, res) =>{
  const idChat = req.body.idChat;
  // const idBenevole = req.body.idBenevole;
  const message = req.body.message;
  const moment = new Date();
  const sql = 'INSERT INTO discussion (message,  idChat,moment) values(?,?,?)';
  
  res.locals.connection.query(sql, [message,  idChat,moment], (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted');
    res.send();
  });
  
});