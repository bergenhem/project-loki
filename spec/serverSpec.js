var request = require("request");

var baseUrl = "http://localhost:3000";

describe("Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns 'Hello World'", function(done) {
      request.get(baseUrl, function(err, response, body) {
        expect(body).toBe("Hello World");
        done();
      });
    });

    describe("GET all provinces", function() {
      it("returns status code 200", function(done) {
        request.get(baseUrl + "/provinces", function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });

      it("returns array of provinces", function(done) {
        expect(response.provinces.length).not.toBe(0);
        expect(response.provinces).not.toBe(undefined);
        expect(response.provinces).not.toBe(null);
        done();
      });
    });
  });
});
