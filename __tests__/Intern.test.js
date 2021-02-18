const Intern = require("../lib/Intern")

describe("intern class", () => {
    it("Should create an object", () => {
        const intern = new Intern();

        expect(typeof (intern)).toBe("object")

    })

})

describe("intern school", () => {

    it("Should create a new object with a given school name.", () => {
        const school = "UNC"
        const intern = new Intern("chris", 5, "chris@chris.com", school);

        expect(intern.school).toBe(school)

    })

})

describe("getRole method", () => {

    it("should retrive intern string when called", () => {

        const intern = new Intern()

        expect(intern.getRole()).toBe("Intern")

    })

})