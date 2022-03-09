import { isEven } from "../utils/isEven"; // importing specific functionality from file
import { getStudentCount } from "../utils/get-student-count";
import { Cat, movie, anime } from "../interfaces";
import { obj as angularStudent } from "../utils/other-utils";
//import { movie } from "../interfaces/movie.interface";
//import { anime } from "../interfaces/anime.interface";

import * as isEvenFile from "../utils/isEven"; // importing entire file
import { last } from "rxjs";

describe('variable, data types, typing', () => {
    it('should declare a variable', () => {
        const name = 'Simon';
        let role = 'IT Apps Programmer';
        let taco = new String('Chicken taco');
    });

    it('should be concat practice', () => {
        const name = 'Simon';
        let age = 23;
        const intro = `Hello! My name is ${name} and I am ${age} years old`; 

        expect(intro).toBe('Hello! My name is Simon and I am 23 years old');
        expect(name).toEqual(jasmine.any(String));
        expect(age).toEqual(jasmine.any(Number));
        expect(intro).toEqual(jasmine.any(String)); 
    });

    it('should be an object', ()=>{
        angularStudent;
        expect(angularStudent.name).toEqual('Simon');

        const studentAfterClass = {
            ...angularStudent,
            isAngularSME: true
        }
        expect(Object.keys(studentAfterClass).length).toEqual(4);
    });

    it('should be an array', () =>{
        const people = ['Lee', 'Michelle', 'Sam', 'Max'];
        const morePeople = new Array<string>();
        morePeople.push('Praveen');
        morePeople.push('Angel');

            //array destructuring
    let [food, food2, food3] = people;
    });



    it('is a js object', () => {
        const me = {
            firstName: 'Simon',
            lastName: 'Galvis',
            age: '23',
            car: {
                make: 'Toyota',
                model: 'Tacoma',
                year: 2020,
                engine: 'v6',
                color: 'red'
            },
            placeOfResidence: 'CO',
            favoriteActivities: ['Running, Skiing, Mountain Biking']
            
        };

        // object destructuring
        const {firstName, lastName} = me;
        console.log(firstName);
        console.log(lastName);

        // The "structure" object
        const building = {
            bricks: 12000,
            windows: 100,
            doors: 32,
            name: 'City Hall'
        }
        // De-structure the object (aka destructure the building) down to its pieces and parts
        const { bricks, windows, doors, name } = building;
    });

    it('forgot to talk about booleans', () => {
       const isSuperAwesome = true;
       const wasCalled = false;

       const isAwesome: boolean = true;
       //truthy
/*     if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)

    //falsy

     if (false)
     if (null)
     if (undefined)
     if (0)
     if (-0)
     if (0n)
     if (NaN)
     if ("") */


    });


    describe('typing in typescript', () => {
        it('should talk about basic typing', () => {

            //in S2, they do not expect you to type out simple data types
            const something: string = 'jibber jabber';
            let someNum: number = 77;

            const car: {make: string, model: string, year: number} = {
                make: 'Toyota',
                model: 'Tacoma',
                year: 1998
            }

            const bestCarYear: number = car.year;


            let favFoods: string[] = ['Chicken Tikka', 'Pasta', 'Burrito'];
            let favCarBrands: Array<string> = ['BMW', 'Subaru', 'Toyota'];

        });

        it('should talk interfaces', () => {

            const dbz: anime = {
                name: 'dragonball z',
                year: 1989,
                isGreatestAnimeEver: true
            }

            const pbf: movie = {
                name: 'Peanut Butter Falcon',
                year: 2018,
                isGreatestMovieEver: true
            }

            const userFavs: (movie | anime)[] = [];

            userFavs.push(pbf, dbz);

            console.log(userFavs);

            expect(userFavs.length).toBe(2);

            const userWantsAdditionalInfo: boolean | undefined = undefined;
            
            type Media = anime | movie;

            let favMedia: Media;
        });

        it('should get along "union types"', () => {
            let doesWantLunch: boolean | string = true;
            doesWantLunch = "yes";
        });

        it('interface practice', () => {

            let nyanCat: Cat = {
                isAFatCat: true,
                isTabby: false,
                color: 'gray',
                age: 11,
                diet: {
                    monday:'chicken',
                    wednesday: 'fish',
                    friday: 'birds',
                    weekend: 'poptarts'
                }
            };
        });

        it('is about enums', () => {
            enum Direction {
                up = 0,
                down = 1, 
                left = 2, 
                right = 3
            }

            let startingDirection = Direction.left;
        });

    });
   
    describe('js/ts structures', () => {
        it('reviews operators', () => {
            let max = 'awesome';
            let kerry = 'cool';

            //comparison operator
            // == don't use
            // === strict comparison

            expect(max === kerry).toBe(false); // false

            //operators
            /* 
            a = 10
            b = 5


            + (Addition)	returns the sum of the operands	a + b is 15
            - (Subtraction)	returns the difference of the values	a - b is 5
            * (Multiplication)	returns the product of the values	a * b is 50
            / (Division)	performs division operation and returns the quotient	a / b is 2
            % (Modulus)	performs division operation and returns the remainder	a % b is 0
            ++ (Increment)	Increments the value of the variable by one	a++ is 11
            -- (Decrement)	Decrements the value of the variable by one	a-- is 9
            */





        });

        it('checks ternary logic', () => {
            const isSunny: boolean = true;
            const goOutside: boolean = (isSunny) ? true : false;

            expect(goOutside).toBe(true);
        });

    });

    describe('loops', () => {
        it('loop exist', () => {
            const zooAnimals: string[] = ['Zebra', 'Lion', 'Bear'];

            //for of loops work with the values in arrays
            for (const animal of zooAnimals) {
                console.log(animal);
            }
                // output 
             /* Zebra
                Lion
                Bear */
            

            let student: object = {
                name: 'Simon',
                isDev: true
            }

            //for in loops work with the keys of an object
            for (const key in student) {
                console.log(key);
            }
            // output 
             /* isDev
                name */
            getStudentCount();
            
        });

        it('syntactic sugar part 1', () => {
            let grandparent = {
                parent: {
                    child: {
                        grandChild: 'dave'
                    }
                }
            };

            if(grandparent && grandparent.parent && grandparent.parent.child && grandparent.parent.child.grandChild && grandparent.parent.child.grandChild === 'dave') {

            }

            //elvis operator
            //optional chaining
            // .? checks if next properties exist before continuing

            if (grandparent?.parent?.child?.grandChild === 'dave'){
                console.log('true')
            }


        });
    });
    describe('functions', () => {
        it('review funcs', () => {
            //can be called before being declared
        function add(param1: number, param2: number){
            return param1 + param2
        }

        //cannot be called before being defined
        const addToSeven = (param1: number, param2: number) => {
            return 7 + param1 + param2
        }
      });

      it('function and stuff practice', () => {
        //const isEven = (randNum: number) => ((randNum % 2) === 0) ? true : false;

        expect(isEven(1)).toEqual(false);
        expect(isEven(2)).toEqual(true);


       // const addNumbers = (num1: number, num2: number, num3?: number) => num1 + num2 + (num3 ? num3 : null )
      });

      type functionThatTakesNothingAndGivesNothing = () => void;

      it('should be  ahigher order function', () => {
          function doSomethingThenSomethingElse(somethingElseToDo: functionThatTakesNothingAndGivesNothing) {
              somethingElseToDo()
          }

          doSomethingThenSomethingElse(() => console.log('hey buddy, did the thing'))

          function doSomethingWithResult(callBackFromUser: (taco: string) => void) {
              let pokemonName = 'Pikachu';

              callBackFromUser(pokemonName);
          }

          doSomethingWithResult((data) => console.log(data))
      })

      it('uses array functions', () => {
          const arr = [1,2,3,4];

        let fakeMap = (arr: any[], mutater: any) => {
            let copy = [...arr]
            //for (const index of copy) {
               // index = mutater(index);
           // }
            return copy;
        }

          const map1 = arr.map(x => x*2);

          //Use of array filter method
          const evenNumbers = arr.filter(number => (number % 2) === 0)
      });

      it('practices map', () => {      //set return type of func
        const isEven = (randNum: number): boolean => ((randNum % 2) === 0) ? true : false;
          let numeros = [1,2,3,4,5,6,7,8,9];

          let arrOfBools: boolean[] = numeros.map(number => isEven(number));

          expect(arrOfBools).toEqual([false, true, false, true, false, true, false, true, false]);


      });
   });

});