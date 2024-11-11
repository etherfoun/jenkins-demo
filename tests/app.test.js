import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('GET /', function() {
    it('responds with Hello World!', async function() {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.equal('Hello World!');
    });
});
