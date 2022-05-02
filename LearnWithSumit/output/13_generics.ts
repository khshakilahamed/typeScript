const addID = <T extends /* object */ {
    name: string,
    age: number,
}>(obj: T) =>{
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
};

let user = addID({
    name: "Mashrafie",
    age: 40,
    country: "Bangladesh",
});


// --------- generic with interface --------- 

interface APIResponse<T>{
    status: number;
    type: string;
    data: /*object*/ T;
}

const response1: APIResponse<object> = {
    status: 200,
    type: 'good',
    data: {
        name: "Test",
        something: 300,
    }
}