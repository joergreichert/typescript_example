export class Dog {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }

    public static getOldestDog (dogs: Array<Dog>) {
        if(dogs.length == 0) {
            return undefined
        } else if(dogs.length == 1) {
            return dogs[0]
        } else {
            return dogs.reduce((first, second) => Dog.getOlderDog(first, second))
        }
    }
    
    private static getOlderDog (dog1:Dog, dog2:Dog) {
        if (dog1.getAge() < dog2.getAge()) {
            return dog2
        }
        return dog1
    }
}