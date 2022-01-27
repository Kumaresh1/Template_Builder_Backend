const express = require('express');

const DocumentController = require('./controller/Document');


module.exports= function(app){
    
    //initialising api routes
    const apiRoutes = express.Router();




    //******************** APIs************************** 
    //Save Document
    apiRoutes.post('/document/save',DocumentController.SaveDocument);
    //Get Document
    apiRoutes.get('/document/get',DocumentController.ReadDocument);
    
    apiRoutes.delete('/document/deletedoc',DocumentController.DeleteDocument);
    apiRoutes.delete('/document/deletefield',DocumentController.DeleteDocumentField);

    apiRoutes.put('/document/addblock',DocumentController.addComponent);
    apiRoutes.post('/document/updatefield',DocumentController.updateField);
    

    app.use('/api',apiRoutes);
    
    app.use((req, res) => {
        res.status(404).send("Wrong URL request");
    });
    
    
}