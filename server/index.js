const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');
const app= express();
const mysql= require('mysql');
const db= mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'menucraft',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/get', (req, res)=>{

    const getMenu="SELECT * from menu;"
    db.query(getMenu,(err,result)=>{
   
   
   res.send(result);
    });

});


app.get('/api/getIngredient', (req, res)=>{

    const getIngredient="SELECT * from ingredient;"
    db.query(getIngredient,(err,result)=>{
   
   res.send(result);
    });

});

  
app.post('/api/addOrder', (req, res) => {
    const order = req.body.order;
    const username = req.body.username;
  
    // Function to get user ID based on the username
    const getUserId = (callback) => {
      const getUserIdQuery = 'SELECT iduser FROM user WHERE name = ?';
      db.query(getUserIdQuery, [username], (err, userResult) => {
        if (err) {
          console.error('Error fetching userId:', err);
          res.sendStatus(500); // Internal Server Error
          return;
        }
        if (userResult.length === 0) {
          console.error('User not found');
          res.sendStatus(404); // User not found
          return;
        }
        const userId = userResult[0].iduser;
        callback(userId);
      });
    };
  
    // Map through the orders and insert them into the database
    order.forEach(async (item) => {
      const { idmenu, quantity } = item;
  
      // Get the user ID
      getUserId((userId) => {
        // Add logic to insert the order data into your database
        console.log('Received username:', username);
        console.log('Received userId:', userId);
  
        const now = moment().format('YYYY-MM-DD HH:mm:ss'); // current date and time
  
        // Insert into the orderfrommenu table
        const insertOrderQuery = `INSERT INTO orderfrommenu (userId, menuId, orderDATE, quantity) VALUES (?, ?, ?, ?)`;
        db.query(insertOrderQuery, [userId, idmenu, now, quantity], (err, result) => {
          if (err) {
            console.error('Error inserting order:', err);
            res.sendStatus(500); // Internal Server Error
            return;
          }
          console.log(`Order for menuId ${idmenu} inserted successfully.`);
        });
      });
    });
  
    res.sendStatus(200);
  });


  app.post('/api/orderItems', async (req, res) => {
    const username = req.body.name;
  
    const getUserIdQuery = 'SELECT iduser FROM user WHERE name = ?';
    db.query(getUserIdQuery, [username], (err, userResult) => {
      if (err) {
        console.error('Error fetching userId:', err);
        res.sendStatus(500); // Internal Server Error
        return;
      }
      if (userResult.length === 0) {
        console.error('User not found');
        res.sendStatus(404); // User not found
        return;
      }
  
      const userId = userResult[0].iduser;
  
      // Now you can use userId to query menu items
      const getMenuQuery = 'SELECT menu.name, menu.price, orderfrommenu.quantity FROM orderfrommenu JOIN menu ON menu.idmenu = orderfrommenu.menuId WHERE orderfrommenu.userId = ?;';
      db.query(getMenuQuery, [userId], (err, result) => {
        if (err) {
          console.error('Error fetching menu items:', err);
          res.sendStatus(500); // Internal Server Error
        } else {
          console.log('Menu items:', result);
          res.send(result);
        }
      });
    });
  });
  

app.get('/api/getIemById/:menuId', async (req, res) => {
    const menuId = req.params.menuId;
  console.log(menuId);
    const getMenuItemQuery = 'SELECT * FROM menu WHERE idmenu = ?';
  
    db.query(getMenuItemQuery, [menuId], (err, result) => {
      if (err) {
        console.error('Error fetching menu item:', err);
        res.sendStatus(500); // Internal Server Error
        return;
      }
  
      res.send(result);
    });
  });
  
  

app.post("/api/insert", (req, res)=>{


    const name=req.body.name
    const pass=req.body.password
     //const s="INSERT INTO user(name,password,isAdmin) VALUES (?,?,0);"
     const s="INSERT INTO user(name,password,isAdmin) VALUES (?,?,0);"
     db.query(s,[name, pass],(err,result)=>{
  
    
     });
});
app.listen(3001, ()=>{
    console.log("hello");
});