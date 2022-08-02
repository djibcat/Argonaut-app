import express from "express"
import cors from "cors"
import argonauts from "./api/argonauts.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/argonauts", argonauts)
app.use("*", (req,res) => res.status(404).json({error:"Not Found"}))

export default app