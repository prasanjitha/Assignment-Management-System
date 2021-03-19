var express=require('express');
var fileupload=require('express-fileupload');
var assingmentRoutes=require('./routes/assignment');
var path=require('path');
var cors=require('cors');

var app=express();
var mongoose=require('mongoose');
const bodyParser = require('body-parser');
var port=process.env.PORT||5000;
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

app.use('/assignment',assingmentRoutes);

app.use(fileupload());
app.post('/upload',(req,res)=>{
    if(req.files===null){
        return res.status(400).json({msg:"No file Uploaded"});
    }
    const file=req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`,err=>{
        if(err){
            console.error(err);
        }
        res.json({filename:file.name,filePath:`/uploads/${file.name}`});
    });
})
var corsOptions={
    origin:'*',
    optionsSuccessStatus:200,
}
app.use(cors(corsOptions));


const mongoURI='mongodb://localhost:27017/students';
mongoose
.connect(mongoURI,{useNewUrlParser:true})
.then(()=>console.log('MongoDB conected'))
.catch(err=>console.log(err));

var users=require('./routes/users');
app.use('/users',users);
app.listen(port,()=>{
    console.log("server is lostning on port "+port);
})