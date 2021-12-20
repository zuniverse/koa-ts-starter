import server from "../../src/server";
import request from "supertest";

// close the server after each test
afterEach(done => {
  server.close();
  done();
});

describe("routes/index", () => {
  it("should respond with a text string", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("text/plain");
    expect(response.text).toContain("Welcome");
  });
});
