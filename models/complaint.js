const mongoose=require('mongoose');
const Schema =mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/techdb',{ useNewUrlParser: true });

mongoose.connection.once('open',function()
{
    console.log('Connection has been made');
}).on('error',function(error)
{
    console.log('Connection error:',error);
});

////including embedded documents into the document
var Customer=require('mongoose').model('Customer').schema
var Equipment=require('mongoose').model('Equipment').schema

var complaintSchema= new Schema (
    {
       Location:String,
       Defect:String,
       Picture:String,
       Customer:[Customer],
       Equipment:[Equipment]
    }
)

module.exports= mongoose.model('Complaint',complaintSchema);