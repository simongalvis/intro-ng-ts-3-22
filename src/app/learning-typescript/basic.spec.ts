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
});