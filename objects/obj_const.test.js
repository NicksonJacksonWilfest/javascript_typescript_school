const Person = require('./obj_const')

describe('Person', () => {
    let myFather, myMother, myBrother, mySister

    beforeAll(() => {
        myFather = new Person("John", "Doe", 50, "blue", 222)
        myMother = new Person("Sally", "Rally", 48, "green", 333)
        myBrother = new Person("David", "Doe", 25, "brown", 444)
        mySister = new Person("Jane", "Doe", 29, "brown", 555)
        Person.prototype.religion = "Christian"
    })

    test('should create a person with correct properties', () => {
        expect(myFather.firstName).toBe("John")
        expect(myFather.lastName).toBe("Doe")
        expect(myFather.age).toBe(50)
        expect(myFather.eyeColor).toBe("blue")
        expect(myFather.id).toBe(222)
    })

    test('should return full name', () => {
        expect(myFather.fullName()).toBe("John Doe")
    })

    test('should have a car object with correct properties', () => {
        expect(myFather.car).toEqual({
            type: "Fiat",
            model: "500",
            color: "white"
        })
    })

    test('should have religion property from prototype', () => {
        expect(myFather.religion).toBe("Christian")
    })
})