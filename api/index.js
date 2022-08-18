const express = require("express");
const app = express();
app.use(express.json());
const port = 8000;
const pool = require("./Model/db");
const cors = require("cors");
app.use(cors());

// Getting all the values from database
app.get("/", async (req, res) => {
  try {
    const getAll = await pool.query(`select * from shopify`);
    //res  is server related
    //req.body is frontend related
    res.json(getAll.rows);
    console.log(getAll.rows);
  } catch (err) {
    console.log(err);
  }
});
//   for posting the data
app.post("/register", async (req, res) => {
  try {
    const { data } = req.body;
    const registerUser = await pool.query(
      `insert into shopify (useremail,productname,productinfo,price) values($1,$2,$3,$4) returning *`,
      [
        req.body.useremail,
        req.body.productname,
        req.body.productinfo,
        req.body.price,
      ]
    );
    res.json(registerUser.rows);
    console.log(registerUser.rows);
  } catch (error) {
    console.log(error.message);
  }
});
// for deleting the data
app.delete("/deleteUser/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await pool.query("delete from shopify where id=$1", [id]);
  res.json("user deleted sucessfully");
});

// for editing the user
app.put("/editUser/:id", async (req, res) => {
  const { id } = req.params;
  const editUser = await pool.query(
    "update shopify set useremail=$1,productname=$2,productinfo=$3,price=$4 where id=$5",
    [
      req.body.useremail,
      req.body.productname,
      req.body.productinfo,
      req.body.price,
      id,
    ]
  );
  res.json("User Edited");
});
// app.put('/api/v1/put/:id',async(req,res)=>{
//     const {id} = req.params
//     const updateUser = await pool.query(`update branchlocation set companybranch = $1,location=$2 where id=$3`,
//     [req.body.CBankBranch,req.body.companylocation,id])
//     res.json('updated')
//     console.log(req.body);
//     })

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
