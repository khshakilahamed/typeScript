
enum RType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN};


interface APIResponse<T>{
    status: number;
    type: RType;
    data: /*object*/ T;
}

const response: APIResponse<string> = {
    status: 200,
    type: RType.FAILURE,
    data: "test"
}
