const app = require("../app");
const mocha = require("mocha");
const chai = require("chai");
const supertest = require("supertest");
const expect = chai.expect;

describe('GET /apps', () => {
    it('should return an array of objects', () =>{
        return supertest(app)
        .get('/apps')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body[0]).to.include.all.keys(
                'App','Category','Rating'
            )
        })
    } )
        
    
    it('should throw an error if genre is not allowed', () => {
        return supertest(app)
        .get('/apps')
        .query({genres: 'foo'})
        .expect(400)
        
    });


    it('should throw an error if sort is unallowed', () => {
        return supertest(app)
        .get('/apps')
        .query({sort: 'foo'})
        .expect(400)
    });

    it('should sort by given parameters', () => {
        return supertest(app)
        .get('/apps')
        .query({sort: 'Rating'})
        .expect(200)
        .expect('Content-Type',/json/)
        .then(res => {
            expect(res.body).to.be.an('array')
            let i = 0, sorted = true;
            while(sorted&&i<res.body.length-1){
                sorted=sorted&&res.body[i].Rating<res.body[i+1].Rating;
                i++;
            }
            expect(sorted).to.be.true;
        })
    });

    it.skip('should filter by genre');

    }
)