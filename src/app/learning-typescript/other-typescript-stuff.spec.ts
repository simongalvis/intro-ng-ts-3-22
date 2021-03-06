describe('TS features', () => {
    it('should use the spread operator', () => {
        //...
        //denotes spreading the indices of an array or object across a new structure
        //used to create a deep copy of an existing array
        const myNums: number[] = [1,2,3,4,5,6,7,8,9];

        const copyMynums: number[] = myNums;

        //spread indices of muNums across spreadNums array
        const spreadNums: number[] = [...myNums];
        //spreadNums is a deep copy of myNums

        const moreNums: number[] = [...myNums, 7, 9, 33];
        expect(moreNums).toEqual([1,2,3,4,5,6,7,8,9,7,9,33]);
        expect(copyMynums).toBe(myNums);
    });


    it('should use the rest operator', () => {
        // ...

        const myNums: number[] = [1,2,3,4];
        function addSomeNumbers(...theNumbers: number[]) {
            theNumbers.reduce((accumulator, current) => accumulator + current);
        }

        // expect(addSomeNumbers(5,5,5,5,5)).toEqual(25);
    });


    it('destructuring', () => {
        function giveMeTuple() : [number, string] {
            let random = Math.floor(Math.random() * 2);
            let students = ['sam', 'max'];
            return [random, students[random]];
        }

        let theTuple: any[] = giveMeTuple()

        console.log(theTuple);
    })
});