const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')


//define the express operation
const app=express();
const port=3000;


//defining the cors -cross origin by reciving the data in json format
app.use(cors());
app.use(bodyParser.json())




//establish the connection with the dB
const db=mysql.createConnection({
host:'localhost',
port:3306,
user:'root',
password:'root',
database:'db2'   
});




//verifying whether db is connected or not
db.connect(err=>{
if(err){
    console.error('connection is not established with the dB',err);
}
else{
    console.log('Connected to db')
}


});


app.listen(port,()=>{console.log('server port estbalished on 3000')})


//to get all the clients
app.get('/getClients',(req,res)=>{
const sql='select * from xxclient';
db.query(sql,(err,result)=>{
    if(err){
    console.error('Error in fetching the clients',err);
    res.status(500).json({error:'An error occured'});
}else{
    res.status(200).json(result);
}


});
});
//to get a client on id
app.get('/getClient/:id',(req,res)=>{
    const id=req.params.id;
    const sql='select * from xxclient where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in fetching the Client details',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
   
    });
    });
//to insert client into db
app.post('/addClient',(req,res)=>{
    const {first_name,last_name,user_name,email,pwd,Address_line1,Address_line2,Address_line3,contact_number,city,state,country}=req.body;
    const sql='insert into xxclient(first_name,last_name,user_name,email,pwd,Address_line1,Address_line2,Address_line3,contact_number,city,state,country) values(?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql,[first_name,last_name,user_name,email,pwd,Address_line1,Address_line2,Address_line3,contact_number,city,state,country],(err,result)=>{
        if(err){
            console.error('Error in adding the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Client added successfully'});
        }


    });
    });

//updation of client
app.put('/updateClient',(req,res)=>{
    const {id,user_name,email,contact_number,Address_line1,Address_line2,Address_line3,city,state,country}=req.body;
    const sql='update xxclient set user_name=?,email=?,contact_number=?,Address_line1=?,Address_line2=?,Address_line3=?,city=?,state=?,country=? where id=?';
    db.query(sql,[user_name,email,contact_number,Address_line1,Address_line2,Address_line3,city,state,country,id],(err,result)=>{
        if(err){
            console.error('Error in updating the client',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Client updated successfully'});
        }


    });
    });
//deletion of client
app.delete('/deleteClient/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from xxclient where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in deleting the client',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json({message:'Client deleted successfully'});
    }
   
    });
    });

//to insert meeting into db
app.post('/scheduleMeeting',(req,res)=>{
    const {Title,no_of_people,Meeting_Date,Meeting_Time,Duration,Meeting_password,Location}=req.body;
    const sql='insert into xxmeeting(Title,no_of_people,Meeting_Date,Meeting_Time,Duration,Meeting_password,Location) values(?,?,?,?,?,?,?)';
    db.query(sql,[Title,no_of_people,Meeting_Date,Meeting_Time,Duration,Meeting_password,Location],(err,result)=>{
        if(err){
            console.error('Error in adding the meeting',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Meeting added successfully'});
        }


    });
    });

//to get all the meetings
app.get('/getMeetings',(req,res)=>{
    const sql='select * from xxmeeting';
    db.query(sql,(err,result)=>{
        if(err){
        console.error('Error in fetching the meetings',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
    
    
    });
    });
    //to get a Meeting on id
    app.get('/getMeeting/:id',(req,res)=>{
        const id=req.params.id;
        const sql='select * from xxmeeting where id=?';
        db.query(sql,[id],(err,result)=>{
            if(err){
            console.error('Error in fetching the Meeting details',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json(result);
        }
       
        });
        });    


//updation of Meeting
app.put('/updateMeeting',(req,res)=>{
    const {id,Title,no_of_people,Meeting_Date,Meeting_Time,Duration,Location}=req.body;
    const sql='update xxmeeting set Title=?,no_of_people=?,Meeting_Date=?,Meeting_Time=?,Duration=?,Location=? where id=?';
    db.query(sql,[Title,no_of_people,Meeting_Date,Meeting_Time,Duration,Location,id],(err,result)=>{
        if(err){
            console.error('Error in updating the Meeting',err);
            res.status(500).json({error:'An error occured'});
        }else{
            res.status(200).json({message:'Meeting updated successfully'});
        }


    });
    });
//deletion of Meeting
app.delete('/deleteMeeting/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from xxmeeting where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in deleting the Meeting',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json({message:'Meeting deleted successfully'});
    }
   
    });
    });        
