function domainName(url) {
    url = url.replace(/https?:\/\//, '').replace('www.', '');
    return url.split('.')[0];
}

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
});
