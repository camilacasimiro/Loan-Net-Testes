const request = require("supertest");
const server = require("../../server");

import {
    deleteBook
} from '../src/controller/crud_book_controller'

describe("Deletando livro", () => {
    test("Deletando o livro pelo ID", () => {
        SECRET = 'jheycftolls'
        const book = deleteBook({
            id: '614cdba01eac6aa4935d2a0e'
        });

        const response = request(server).get("/book/delete").send(book);

        expect(response.status).toBe(200)
    });

});