import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import ArgonautsDAO from "./dao/argonautsDAO.js";

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

await MongoClient.connect(
    process.env.DB_URI,
)
    .catch(err => {
        console.log(err)
        process.exit(1)
    })
    .then(async client => {
        await ArgonautsDAO.injectDB(client)

        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })