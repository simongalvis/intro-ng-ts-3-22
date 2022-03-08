import { doesNotThrow } from "assert";

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
        const obj = {
            name: 'Simon',
            age: '23',
            identity: 'Child of God'
        };
    });

    it('should be an array', () =>{
        const people = ['Lee', 'Michelle', 'Sam', 'Max'];
        const morePeople = new Array<string>();
        morePeople.push('Praveen');
        morePeople.push('Angel');
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

        fit('should talk interfaces', () => {
            interface anime {
                name: string;
                year: number;
                isGreatestAnimeEver: boolean;
            }

            const dbz: anime = {
                name: 'dragonball z',
                year: 1989,
                isGreatestAnimeEver: true
            }

            interface movie {
                name: string;
                year: number;
                isGreatestMovieEver: boolean;
                awards ?: string[] //oprional property
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

            interface Cat {
                isAFatCat: boolean;
                isTabby: boolean;
                color: string;
                age: number;
                diet: object;
            }

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
   

});