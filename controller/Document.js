"use strict";

const mongoose= require('mongoose');
const database = require('../services/mongodb');
const Document = require('../model/documentModel');

//Save Document
exports.SaveDocument = async function (req, res, next) {
  

    console.log("here")
    let document = new Document(req.body); 



   await document.save().then((val) => {
       if (val == null) {
           throw Error("Error while saving Document");
       } else {

           res.status(201).json({
               document:val
           });

       }
   }).catch((err) => {
       console.log(err);
       res.status(401).json({
           error: err
       });
   });

}

//Read Document
exports.ReadDocument = async function (req, res, next) {
  

            
   await Document.find(req.body).then((document_list) => {
       if (document_list == null) {
           throw Error("Error while reading document");
       } else {

           console.log(document_list);
           
           return res.status(200).json({
            documents:document_list
        });

       }
   }).catch((err) => {
       console.log(err);
       res.status(401).json({
           error: err
       });
   });

}


//Delete Methods

exports.DeleteDocument = async function (req, res, next) {
  

    let query=req.body; 

   await Document.deleteOne(query).then((document) => {
        console.log(document)
        if (document == null) {
            throw Error("Error while deleting");
        } 
        else {
 
            return res.status(200).json({
             documents:document
         });
 
        }
    }).catch((err) => {
        console.log(err);
        res.status(401).json({
            error: err
        });
    });

    
 }

 exports.DeleteDocumentField = function (req, res, next) {
  


    let query=req.body.query;
    let value=req.body.delete;
    database.DeleteField(query,value).then((document) => {
        if (document == null) {
            throw Error("Error while  deleting");
        } else {
 
            return res.status(200).json({
             documents:document
         });
 
        }
    }).catch((err) => {
        console.log(err);
        res.status(401).json({
            error: err
        });
    });
 

            
    
 }

 // Update Elements
 
 exports.addComponent = async function (req,res,next){

    console.log(req.query.id,req.body);
    await Document.findOneAndUpdate(
        {"_id":req.body._id},
        {
            $push: {
                blocks: req.body.block
            }
        },{}
        ).then(document => {
    
            console.log(document)
            return res.status(201).json({
                documents:document
            });


        }).catch(err=>{
            console.log(err)
            return res.status(400).json({
                error:err
            });
        })
}


exports.updateField = async function(req,res,next){
    //console.log("Update Field API",req.body)
    await Document.findOneAndUpdate(
        {"_id":req.body._id},
        req.body
    ).then(document => {
        //console.log(document)
        return res.status(201).json({
            "message":"Updated Successfully"
        });
    }).catch(err=>{
        console.log(err)
        return res.status(400).json({
            error:err
        });
    })
}

 





  
