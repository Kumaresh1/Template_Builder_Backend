const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const componentDetails=new Schema({

    componenttype:String,
     
    position:{
        row: Number,
        span:Number,
        offset:Number,
    },
    ui:{
        inputtype:String,
        label:String,
        placeholder:String,
        name:String
    },
    validators:{
        required:Boolean,
        options:[{
            name:String,
            value:String
        }]
    },


    


})



const DocumentSchema = new Schema({
    
    
    formname:{
        type:String,
        default:"new form ",
    },
    description:{
        type:String,
    },

    blocks:[componentDetails],
       

});




module.exports = mongoose.model("Template", DocumentSchema);
