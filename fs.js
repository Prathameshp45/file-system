const fs = require('fs');

fs .writeFile('file.txt','hello from write',(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log('write sucessfully');
    }
})


fs.readFile('file.txt','utf8',(err,data)=>{  
    if(err){
        console.log(err);
    }else(
        console.log(data)
    )
})

fs.appendFile('file.txt','data apend to a new file ',(err)=>{
if(err){
    console.log(err);

}else{
    console.log("added suss")
}
})
fs.readFile('file.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);

    }else(
        console.log(data)
    )
})



