import { fetchPublic } from "../typescript/drand";

describe("trying to fetch public randomness", () => {
   it("should return a valid JSON output", (done) => {
        fetchPublic("192.168.0.22:80").then(output => {
            console.log(output);
            done();
        });
   });
});