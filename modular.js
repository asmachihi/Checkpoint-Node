const myModule = require('./myModule')

const directory = process.argv[2]
const extension =process.argv[3]

myModule(directory,extension,(err,filterdList)=>{
   if (err) throw err
   filterdList.forEach(list => {
       console.log(list)
       
   });

}
)