const router = require('express').Router();
const userModel = require('../models/users');


router.route('/check').post((req,res)=>{
    let u_name = req.body['user-name'];
    let password = req.body.password;
    userModel.find({user_id:u_name,},(err,doc)=>{
        if(password==doc[0].pswd){
            res.redirect(`/users/update?user_name=${u_name}`);
        }
        else{res.send('ERROR');}
    });
});

router.route('/update').get((req,res)=>{
    res.render('update',{user_name:req.query.user_name})
});

router.route('/save/:user_name').post((req,res)=>{
     var u_name = req.params.user_name;
     var change={
         pswd:req.body['new-password'],
         dob:req.body['new-dob']
     }

     userModel.findOneAndUpdate({user_id:u_name},change,(err,doc)=>{
         if (err) throw err;
         res.redirect('/');      
     });

});

module.exports = router;