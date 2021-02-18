const Manager = require("../lib/Manager")

describe("manager class", () => {
    it("Should create an object", () => {
        const manager = new Manager();

        expect(typeof (manager)).toBe("object")

    })

})

describe("manager office number", () => {

    it("Should create a new object with a given office number.", () => {
        const officeNumber = 123
        const manager = new Manager("chris", 5, "chris@chris.com", officeNumber);

        expect(manager.officeNumber).toBe(officeNumber)

    })

})

describe("getRole method", () => {

    it("should retrive manager string when called", () => {

        const manager = new Manager()

        expect(manager.getRole()).toBe("Manager")

    })

})