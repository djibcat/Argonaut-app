import ArgonautsDAO from "../dao/argonautsDAO.js";

export default class ArgonautsController {

    static async apiGetArgonauts(req, res, next) {
        const response = await ArgonautsDAO.getArgonauts()
        return res.json(response)
    }

    static async apiPostArgonauts(req, res, next) {
        try {
            const argonautName = req.body.name
            await ArgonautsDAO.postArgonaut(argonautName)
            res.json({status: "success"})
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }
}