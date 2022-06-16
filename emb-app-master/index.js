var express=require("express");
var app=express();
var port=4000;

const employees = [
    {
      name: 'john',
      age: 20,
      salary: 10,
      status: 'active',
    },
    {
      name: 'george',
      age: 25,
      salary: 20,
      status: 'inactive',
    },
    {
      name: 'kumar',
      age: 30,
      salary: 35,
      status: 'active',
    },
    {
      name: 'xyz',
      age: 30,
      salary: 35,
      status: 'active',
    },
    {
      name: 'pqr',
      age: 20,
      salary: 45,
      status: 'inactive',
    },
  ];


app.use(express.urlencoded({extend:false}));
app.use(express.json());

// app.get("/",(req,res)=> {
//     res.send("hello all")
// })

app.get("/",(req,res)=> {
    res.send(employees)
})

// app.get("name",(req,res)=> {
//     res.send(data: employees)
// })

app.listen(port,function(){
    console.log(`app listening at ${port}`);
})