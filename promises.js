

const posts = [];


function createPost(post) {
    return new Promise((resolve,reject) => {
    posts.push(post);
    resolve(post.title);
})
}

function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) =>
    setTimeout( () => {
        const output = new Date().getTime();
    resolve(output);
}, 1000))
}

function deletePost(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
        if(posts.length > 0)
        {
        const poppedElement = posts.pop();
        resolve(poppedElement);
        }
        else
        {
            reject("ERROR")
        }
    },1000)
    })
}
Promise.all([createPost({title : "Before post", body : "user last Activity time"}),updateLastUserActivityTime()]).then((values => console.log( values)))

Promise.all([createPost({title : " post 1", body : "user last Activity time"}),updateLastUserActivityTime()]).then((values => console.log( values)))

Promise.all([createPost({title : " post 2", body : "user last Activity time"}),updateLastUserActivityTime()]).then((values => console.log( values)))

Promise.all([createPost({title : " post 3", body : "user last Activity time"}),updateLastUserActivityTime()]).then((values => console.log( values)))

Promise.all([createPost({title : " post 4", body : "user last Activity time"}),updateLastUserActivityTime()]).then((values => console.log( values)))

.then(deletePost)
// .then(popped => console.log(popped))
.then(console.log(posts))
