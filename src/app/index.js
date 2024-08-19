const express = require('express')
const mongoose = require('mongoose') 
const app = express()


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

mongoose.connect("mongodb+srv://pencils:Neoterictattoos49@nextjs-crud-project.tdotctr.mongodb.net/Crud-project?retryWrites=true&w=majority&appName=nextjs-crud-project")
.then(() => {
console.log("connected to database")
})
.catch(() => {
    console.log("Failed to connect to database")
})


