const Engineer = require("Engineer")

describe("Engineer class", () => {
    it("Should create an object", () => {
        const engineer = new Engineer();

        expect(typeof (engineer)).toBe("object")

    })

})

describe("engineer github", () => {

    it("Should create a new object with a given github username.", () => {
        const github = "chrisrisseler"
        const engineer = new Engineer("chris", 5, "chris@chris.com", github);

        expect(engineer.github).toBe(github)

    })

})

describe("getRole method", () => {

    it("should retrive engineer string when called", () => {

        const engineer = new Engineer()

        expect(engineer.getRole()).toBe("Engineer")

    })

})