const Employee = require("Employee")

describe("Employee class", () => {
    it("Should create an object", () => {
        const employee = new Employee();

        expect(typeof (employee)).toBe("object")

    })

})

describe("employee name", () => {

    it("Should create a new object with a given name.", () => {
        const name = "Bob"
        const employee = new Employee(name);

        expect(employee.name).toBe(name)

    })

})

describe("employee id", () => {

    it("Should create a new object with a given id.", () => {
        const id = 1
        const employee = new Employee("bob", id);

        expect(employee.id).toBe(id)

    })

})

describe("employee email", () => {

    it("Should create a new object with a given email.", () => {
        const email = "Chris@chris.com"
        const employee = new Employee("bob", 5, email);

        expect(employee.email).toBe(email)

    })

})


describe("getName method", () => {

    it("Should retrive the name from the object, using the getname method", () => {
        const name = "Bob"
        const employee = new Employee(name);

        expect(employee.getName()).toBe(name)

    })
})

describe("getId method", () => {

    it("Should retrive the id from the object, using the getid method", () => {
        const id = 3
        const employee = new Employee("Bob", id);

        expect(employee.getId()).toBe(id)

    })
})

describe("getEmail method", () => {

    it("Should retrive the Email from the object, using the getEmail method", () => {
        const email = "chris@chris.com"
        const employee = new Employee("Bob", 3, email);

        expect(employee.getEmail()).toBe(email)

    })
})

describe("getRole method", () => {

    it("should retrive employee string when called", () => {

        const employee = new Employee()

        expect(employee.getRole()).toBe("Employee")

    })

})