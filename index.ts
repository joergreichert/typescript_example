import { Dog } from './dog'
const dog1 = new Dog('Hasso', 3)
const dog2 = new Dog('Jake', 7)
const dog3 = new Dog('Bello', 5)

const foundDog = Dog.getOldestDog([ dog1, dog2, dog3 ])
if(foundDog) {
    console.log(`The oldest dog is ${foundDog.getName()} and is ${foundDog.getAge()} years old.`)
} else {
    console.log(`The oldest dog isn't defined`)
}
