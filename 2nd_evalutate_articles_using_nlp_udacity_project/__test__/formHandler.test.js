// test the js files
import { handleSubmit } from "../client/js/formHandler"

describe("Testing JS file ", () => {
    test('Test whether the function is diefined', () => {
        expect(handleSubmit).toBeDefined;
    })
})