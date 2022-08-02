import http from "../http-common.js"

class ArgonautsDataService {

    getAllArgonauts () {
        return http.get("")
    }

    postArgonaut (data) {
        return http.post("post",data)
    }
}

export default new ArgonautsDataService()