////////////////-----------------LEARN TYPESCRIPT-------------------/////////////////////

// let num1: number = 1

// function calculation(num1: number, num2: number){
//     return num1 + num2;
// }
// console.log(calculation(num1, 7));




        //   syntax feature

// function getTotal(numbers: Array<number>){
//     return numbers.reduce( (acc, item) =>{
//         return acc + item;

//     },0 );
// }

// console.log(getTotal([1,2,3]));

    //  autocomplition feature
// const user = {
//     firstName: 'jonhy',
//     lastName: 'depp',
//     age: 50,
// }

// console.log(user.firstName);



   //    type-alias


    // number
    // string
    // boolian
    // arr[]

    // custom type

    // type User = {
    //     name: 'Anshul',
    //     age: 20,
    //     address?: 'street to street convay',
    // }

    // const user: User =  {
    //    name: 'Anshul',
    //    age: 20,
      
    // }


    // function login(Userdata: User): User {
    //    return Userdata;
    // }

    // console.log(login(user));

    // type ID = number | string ;

    // const userId: ID = '123';


    ////////------------INTERFACES--------------///////////


interface Transaction {
    payerAccountNumber : number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transaction: Transaction[]
}

const transaction1: Transaction = {
    payerAccountNumber : 344,
    payeeAccountNumber: 788,
}

const transaction2: Transaction = {
    payerAccountNumber : 344,
    payeeAccountNumber: 788,
}

 const bankAccount: BankAccount = {
    accountNumber: 88283,
    accountHolder: 'jonhy depp',
    balance: 73,
    isActive: true,
    transaction: [transaction1, transaction2]
 }