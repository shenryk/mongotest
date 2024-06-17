const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const mongoURI = "mongodb+srv://admin:admin123@cluster0.j9iqyzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express()

//connect to MongoDB
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('Connected to MongoDB'))
// .catch (err => console.error(err))

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoURI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Define a user scheme
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

// Create mongoose model
const User = mongoose.model('User',userSchema)

//Configure Body-parser middleware
app.use(bodyParser.urlencoded({extended: false}))
//
app.get('/',(req,res)=>{
    res.sendFile(__dirname = "./views/index.html")
})

//create post route
app.post('/users', (req, res) => {
    res.send("Add users here")
    

})
app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})