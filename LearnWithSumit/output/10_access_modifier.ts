class Players {
    public name: string;
    private age: number;
    readonly country: string;

    constructor(n: string, a:number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }


    //  --------- short hand of construction with access modifier ---------
    // constructor( public name: string, private age: number,readonly country: string){}

    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}


const mashrafi = new Players("Mashrafi", 40, "Bangladesh");
const shakib = new Players("Sakib", 38, "Bangladesh");

console.log(mashrafi.name); // we can read the name and also change the name.
console.log(mashrafi.country); // country could be read only. 
// console.log(mashrafi.age); // it will through error, cause age is private.

// array 
const player:Players[] = [];


player.push(shakib);
player.push(mashrafi);