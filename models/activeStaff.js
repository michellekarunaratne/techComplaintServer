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
var Staff=require('mongoose').model('Staff').schema



var complaintSchema= new Schema (
    {
      Staff:[Staff],
      LoginStamp:Date
    }
)

module.exports= mongoose.model('Complaint',complaintSchema);