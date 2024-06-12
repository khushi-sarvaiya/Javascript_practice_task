const fs = require('fs')
let new_arr=[];
fs.readFile('password.txt', (err, data) => {
  if (err) throw err;   
    new_data = (data.toString());
    arr=(new_data.split("\n"));
    for (let i = 0; i < arr.length; i++){
       new_arr[i]=arr[i].split(":");
    }    
   new_arr.map((items) => {
      console.log("User:",items[0]+" ,"+"Command Interpreter:",items[6]);
    });
})

