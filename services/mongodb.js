const mongoose = require('mongoose');

//MODELS
const Documents = require('../model/documentModel');


const { json } = require('express');


/*****************************Read Queries*************************************************/



async function readDocuments() {
   
    var data = {};
   

    return await Documents.find().then(result=>{

        console.log(result)
        return result;
    }) 
    .catch(err=>{
        console.log(err)
        return err
    })
}


/*****************************Write Queries*************************************************/







async function saveDocument(document) {
    

    console.log(document)

    await document.save().then((doc) => {
       
        console.log(doc);
        document_details=doc;
       
       
    }).catch((err) => {
        console.log("Error while  Creating Document")
        
        return err;
    });
    return document_details;
}


async function DeleteDocument(query) {
    
   await Documents.deleteOne(query).then((doc) => {
       
        document_details=doc;
        
       
       
    }).catch((err) => {
        console.log(err)
        throw new Error(err);
   
    });
    return document_details;
    
}
 
async function DeleteField(query,value) {
    

    console.log("del Field");
    console.log(query,value)

    await Documents.updateOne( 
        query, 
    { $pull: { blocks: value } }
    
    ).then((doc) => {
       
        console.log("DF",doc);
        document_details=doc;
        
       
       
    }).catch((err) => {
        console.log("Error while  Deleting Document Field")
        throw new Error(err);
        
    });
    return document_details;
}


module.exports = {
    
    readDocuments,
    saveDocument,
    DeleteDocument,
    DeleteField

}