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

var staffSchema= new Schema (
    {
        firstName:String,
        lastName:String,
        Nic:String,
        EmployeeId:String
    }
)

module.exports= mongoose.model('Staff',staffSchema);
