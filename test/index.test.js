const routes = require("../routes")
const should = require("should")
const request = require("supertest")
const moxios = require("moxios")
const express = require("express")

const init = () => {
    const app = express()
    app.use(routes())
    return app
}

describe("API", () => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it("/lookup should fetch from themoviedb", async () => {
        moxios.stubRequest(/api.themoviedb.org\/3\/search\/movie/, {status: 200, response: {}})

        const app = init()
        await request(app).get("/api/lookup?title=Robot")
        moxios.requests.mostRecent().url.should.equal("https://api.themoviedb.org/3/search/movie?api_key=test_key&language=en-US&query=Robot")
    })

    it("/lookup should return movie data", async () => {
        const movies = [
            {id: 0, title: 'Robot Film Test', poster_path: 'test_path.jpg', release_date: '2020-02-28', overview: "Just a simple test film."}
        ]
        const data = {results: movies}
        moxios.stubRequest(/api.themoviedb.org/, {status: 200, response: data})

        const app = init()
        const res = await request(app).get("/api/lookup?title=Robot")

        res.status.should.equal(200)
        res.type.should.equal('application/json')
        res.body.should.deepEqual(movies)
    })
})