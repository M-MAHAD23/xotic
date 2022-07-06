const express = require('express');
const router = express.Router();
const upload = require('../multermiddleware/multer');
const fs = require('fs');
const xoticSchema = require('../model/xoticSchema');

// PUTTING A XOTIC IN OUR DATABASE
router.post ('/',upload,async(req,res)=>{
   const xotic = new xoticSchema({
        BrandName: req.body.BrandName,
        Industry: req.body.Industry,
        Description: req.body.Description,
        Website: req.body.Website,
        img:{
            data: fs.readFileSync(req.file.path),
            contentType: 'image/png'
        }
   })
   try{
      const savedxotic = await xotic.save()
      res.json(savedxotic);
   }catch(err){
      res.json({message: err})
   }


})

module.exports = router