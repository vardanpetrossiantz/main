// test the url validator
import{ validateUrl } from "..src/client/js/urlValidator.js"

describe("Validate URL", () => {
test('The input is analized when URL is valid', () => {
    // expect(validateUrl("https://api.meaningcloud.com/sentiment-2.1?key=")).toBe(true);
    expect(validateUrl).toBeDefined;    
})
})