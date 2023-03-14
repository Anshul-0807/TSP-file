////////////////-----------------LEARN TS-------------------/////////////////////

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


// interface Transaction {
//     payerAccountNumber : number;
//     payeeAccountNumber: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transaction: Transaction[]
// }

// const transaction1: Transaction = {
//     payerAccountNumber : 344,
//     payeeAccountNumber: 788,
// }

// const transaction2: Transaction = {
//     payerAccountNumber : 344,
//     payeeAccountNumber: 788,
// }

//  const bankAccount: BankAccount = {
//     accountNumber: 88283,
//     accountHolder: 'jonhy depp',
//     balance: 73,
//     isActive: true,
//     transaction: [transaction1, transaction2]
//  }

// //  Extend Interfaces

// interface Book {
//     name: string;
//     price: number;
// }

// interface EBook extends Book {
//     // name: string;
//     // price: number;
//     fileSize: string | number;
//     formated: string;
// }

// interface AudioBook extends EBook {
//     // name: string;
//     // price: number;
//     // fileSize: string | number;
//     // formated: string;
//     duration: number
// }

// const book: AudioBook = {
//   name:' A great Leader ',
//   price: 1300,
//   fileSize:  ' 300MB',
//   formated: 'pdf',
//   duration: 4,
// }

//  Merge intercepter

// interface Book {
//   name: string;
//   price : number;
// }

// interface Book {
//     size: string;
// }

// const book: Book = {
//     name: 'rich dad poor dad',
//     price: 4000,
//     size: 'medium',
// }


// unions

 type ID = string | number;
//  narrowing
 function printId(id:ID) {
    if(typeof id === 'string'){
    console.log(id.toUpperCase());
     } else{
        console.log(id);
    }
 }

 printId("hello");


 // slice function via unions

 function getFirstThree(x: string | number[]){
    return x.slice(0, 3);
 }


// console.log(getFirstThree("hello"));

console.log(getFirstThree([1,2,3,4,5]));



//  generics

// function logAnything<T>(arg: T): T {
//       console.log(arg);
//       return arg;

// }

// logAnything([1,2,3]);

// 2nd example

// interface HasAge {
//     age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T{
//     return people.sort((a,b) => b.age - a.age[0]);
// }


// const people: HasAge = [{age: 30}, {age: 40}, {age: 10}];

// interface Player {
//     name: string;
//     age: number;
// }

// const players : Player[] = [
//  {
//     name: 'john', age: 70
//  }, 
//  {
//     name: 'jane', age:18
//  },
//  {
//     name: 'johny', age: 40
//  }
// ]

// // assertion
// // const person = getOldest(people) as Player;

// const person = getOldest(people) ;

// //  generic

// person.age;


//////////////////////////////////////////////////////////////////////////

interface IPost {
   title: string;
   id: number;
   description: string;
}

interface IUser {
   id: number;
   name: string:
   age: number;
}

// const fetchPostData = async (path: string ): Promise<IPost[]>  => {
//        const response = await fetch(`http://example.com${path}`) 
//        return response.json();
// }


// const fetchUserData = async (path: string ): Promise<IUser[]>  => {
//        const response = await fetch(`http://example.com${path}`) 
//        return response.json();
// }

const fetchData = async <ResultTyoe>(path: string): Promise <ResultTyoe>=> {
 const response = await fetch(`http://example.com${path}`) 
 return response.json();
}


(async ()=> {
      //  const posts = await fetchPostData('/posts');
      //  posts[0].


      // const users = await fetchUserData('/users');
      // users[0].

      const posts  = await fetchData<IPost[]>('/posts');
       posts[0].
})();

// structural typing or duck typing

interface ICredential {
   username: string;
   password: number;
   isAdmin? : boolean;
}

function login(credential : ICredential): boolean {
   console.log(credential);
   return true;
}

const user = {
    username: 'johny gaddar',
   password: 878474,
   isAdmin? : true,
}

login(user);