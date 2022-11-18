import cors from 'cors'
import express from 'express'

 const app = express()

app.use(express.json())
app.use(cors())

app.listen(5000, () => console.log(`Server access at port -> http://localhost:${5000}`))
