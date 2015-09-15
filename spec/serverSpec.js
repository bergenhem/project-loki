var request = require("request");

var baseUrl = "http://localhost:3000";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
