const express = require ('express'); //path
const bodyParser = require('body-parser'); //to send data from and to 
const cors = require('cors');
const moment = require('moment'); //time
const bcrypt = require('bcrypt'); //hash
const app= express();
const mysql= require('mysql'); //connection
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
        if(quantity!=0){
          const insertOrderQuery = `INSERT INTO orderfrommenu (userId, menuId, orderDATE, quantity) VALUES (?, ?, ?, ?)`;
          db.query(insertOrderQuery, [userId, idmenu, now, quantity], (err, result) => {
            if (err) {
              console.error('Error inserting order:', err);
              res.sendStatus(500); // Internal Server Error
              return;
            }
            console.log(`Order for menuId ${idmenu} inserted successfully.`);
          });
        }
        
      });
    });
  
    res.sendStatus(200);
  });



  app.post('/api/addOrderIngredient', (req, res) => {
    

    const order = req.body.order;
    console.log(order);
    const username = req.body.username;
    const number = req.body.number;
    console.log(number);
    console.log(username);

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
      const { idingredient, quantity } = item;
  
      // Get the user ID
      getUserId((userId) => {
        // Add logic to insert the order data into your database
        console.log('Received username:', username);
        console.log('Received userId:', userId);
    
        if(quantity!=0){
          const insertOrderQuery = `INSERT INTO orderfroming (number,iduser, idingredient, quantity) VALUES (?, ?, ?, ?)`;
        db.query(insertOrderQuery, [number,userId, idingredient, quantity], (err, result) => {
          if (err) {
            console.error('Error inserting order:', err);
            res.sendStatus(500); // Internal Server Error
            return;
          }
        });
        }
        
      });
    });
  
    res.sendStatus(200);
  });




  app.post('/api/setOrdered', (req, res) => {
    

  
    const username = req.body.username;
    
    console.log("HAWAT:::"+username);

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
    
  
      // Get the user ID
      getUserId((userId) => {
        // Add logic to insert the order data into your database
        console.log('Received username:', username);
        console.log('Received userId:', userId);
    
        
          const insertOrderQuery = `UPDATE orderfrommenu
          SET status = 'ordered'
          WHERE status = 'Pending' AND userId = ?;
          `;
        db.query(insertOrderQuery, [userId], (err, result) => {
          if (err) {
            console.error('Error inserting order:', err);
            res.sendStatus(500); // Internal Server Error
            return;
          }
        });

        const changeingredient = `UPDATE orderfroming
          SET status = 'ordered'
          WHERE status = 'pending' AND iduser = ?;
          `;
        db.query(changeingredient, [userId], (err, result) => {
          if (err) {
            console.error('Error inserting order:', err);
            res.sendStatus(500); // Internal Server Error
            return;
          }
        });
        
        
      });
    
  
    res.sendStatus(200);
  });



  app.post('/api/orderItemsIngredients', async (req, res) => {
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
      const getMenuQuery = 'SELECT ingredient.name, ingredient.price, orderfroming.quantity,ingredient.quantity AS qu, orderfroming.number FROM orderfroming JOIN ingredient ON ingredient.idingredient = orderfroming.idingredient WHERE orderfroming.iduser = ? AND orderfroming.status= "pending" ';
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

  app.post("/api/addToMenu", (req, res)=>{


    const name=req.body.name
    const email=req.body.email
    const description=req.body.description
    const username=req.body.username

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
  
     const s="INSERT INTO addtomenu(iduser,recipeName,description,email) VALUES (?,?,?,?);"
     db.query(s,[userId, name,description,email],(err,result)=>{
    
     });
     });
});



app.post("/api/contact", (req, res)=>{


  const name=req.body.name
  const email=req.body.email
  const message=req.body.message

  
   const s="INSERT INTO contact(username,email, message) VALUES (?,?,?);"
   db.query(s,[ name,email, message],(err,result)=>{
  
   });
   });




  app.post('/api/orderItems', async (req, res) => { //for menu to insert into shop
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
      const getMenuQuery = 'SELECT menu.name, menu.price, orderfrommenu.quantity FROM orderfrommenu JOIN menu ON menu.idmenu = orderfrommenu.menuId WHERE orderfrommenu.userId = ? AND orderfrommenu.status= "Pending" ';
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
  

  // app.get('/api/getIemById/:menuId', async (req, res) => {
  //   const menuId = req.params.menuId;
  // console.log(menuId);
  //   const getMenuItemQuery = 'SELECT * FROM menu WHERE idmenu = ?';
  
  //   db.query(getMenuItemQuery, [menuId], (err, result) => {
  //     if (err) {
  //       console.error('Error fetching menu item:', err);
  //       res.sendStatus(500); 
  //       return;
  //     }
  
  //     res.send(result);
  //   });
  // });
  


app.post("/api/insert", (req, res)=>{


    const name=req.body.name
    const pass=req.body.password
    bcrypt.hash(pass, 10, (err, hash) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      console.log(hash);
   

     //const s="INSERT INTO user(name,password,isAdmin) VALUES (?,?,0);"
     const s="INSERT INTO user(name,password,isAdmin) VALUES (?,?,0);"
     db.query(s,[name, hash],(err,result)=>{
    
     });
});
});




app.post('/api/usernameExist', async (req, res) => {
  const username = req.body.name;
console.log(username);
  const getUserIdQuery = 'SELECT iduser FROM user WHERE name = ?';
  db.query(getUserIdQuery, [username], (err, userResult) => {
    if (err) {
      console.error('Error fetching userId:', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }
    else{
      console.log(userResult.length);

      res.send({ exists: userResult.length > 0 });
    }
  

  });
});


app.post('/api/userExist', async (req, res) => {
  const username = req.body.name;
  const password = req.body.password;

  const getUserIdQuery = 'SELECT iduser, password FROM user WHERE name = ?';
  db.query(getUserIdQuery, [username], async (err, userResult) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.sendStatus(500); // Internal Server Error
      return;
    }

    if (userResult.length > 0) {
      // User found, now compare hashed passwords
      const hashedPasswordInDB = userResult[0].password;

      try {
        const passwordMatch = await bcrypt.compare(password, hashedPasswordInDB);

        if (passwordMatch) {
          // Passwords match, user exists
          res.send({ exists: true });
        } else {
          // Passwords do not match, user does not exist
          res.send({ exists: false });
        }
      } catch (compareError) {
        console.error('Error comparing passwords:', compareError);
        res.sendStatus(500); // Internal Server Error
      }
    } else {
      // User not found
      
      res.send({ exists: false });
    }
  });
});

app.listen(3001, ()=>{
    console.log("hello");
});