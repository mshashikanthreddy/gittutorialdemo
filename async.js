console.log('person1 : show ticket');
console.log('person2 : show ticket');


const preMovie = async () => {

    const promiseWifeBringingTicket = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('ticket');
        },3000)
    });

    let ticket = await promiseWifeBringingTicket;

    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

    const getButter =  new Promise((resolve,reject) => resolve(`butter`));

    const getcoldDrink = new Promise((resolve,reject) => resolve(`colddrink`));

    console.log(`wife: i have ${ticket}`);
    console.log(`husband : we should go in`);
    console.log(`wife:no, iam hungry`);

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log(`husband : we should go in`);
    console.log(`wife:i need butter on my popcorn`);

    let butter = await getButter;

    console.log(`husband:here is your popcorn with ${butter}`);
    console.log(`husband : we should go in it is already late`);
    console.log(`wife:last request get me some colddrink`);

    let colddrink = await getcoldDrink;

        console.log(`husband:here is ${colddrink}`);
        console.log(`wife : thank you`);
        console.log(`husband:is anything else`);
        console.log(`wife: no, im fine`);

    return ticket;

}

preMovie().then((m) => console.log(`person3: shows ${m}`))
        
    









// const promiseWifeBringingTicket = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     },3000)
// });

// const getPopcorn = promiseWifeBringingTicket.then((t) => {
//     console.log('wife: i have tickets');
//     console.log(`husband : we should go in`);
//     console.log(`wife:no, iam hungry`);
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`));
// });

// const getButter= getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn');
//     console.log(`husband : we should go in`);
//     console.log(`wife:i need butter on my popcorn`);
//     return new Promise((resolve,reject) => resolve(`${t} butter`));
// });

// const getColdDrinks = getButter.then((t) => {
//     console.log('husband:here is your popcorn with butter ');
//     console.log(`husband : we should go in it is already late`);
//     console.log(`wife:last request get me some colddrink`);
//     return new Promise((resolve,reject) => resolve(`${t} colddrink`));
// }); 

// getColdDrinks.then((t) => console.log(t));



console.log('person4 : show ticket');
console.log('person5 : show ticket');