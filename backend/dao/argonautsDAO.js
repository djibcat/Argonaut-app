import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const mongoObjectId = mongodb.ObjectId;

let argonauts;

export default class ArgonautsDAO {

    static async injectDB(conn) {
        try {
            argonauts = await conn.db(process.env.NAMESPACE).collection("argonauts_names")
        }
        catch (err){
            console.error(`Unable to handle collection in userDAO : ${err}`)
        }
    }

    static async getArgonauts(){
        try{
            const response = await argonauts.find()
            return response.toArray()

        } catch (err){
            console.error(`Unable to get the array list of argonauts : ${err}`)
        }
    }

    static async postArgonaut (argonautName){
        try{
            const argonautDoc = {
                name : argonautName
            }
            return await argonauts.insertOne(argonautDoc)
        }
        catch (err){
            console.error(`Unable to post a new Argonaut on the list : ${err}`)
        }
    }
};