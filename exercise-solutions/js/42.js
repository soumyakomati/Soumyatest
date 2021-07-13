const axios = require( 'axios' );

// 42. Given the following APIs
// * Retrieve users with a particular username (in the example below, username is Bret)
// ```
// https://jsonplaceholder.typicode.com/users?username=Bret
// ```
function passOnData( response ) {
    return response.data;
}

axios.get( `https://jsonplaceholder.typicode.com/users?username=Bret` )
    .then( passOnData )
    .then(function( data ) {
        const userid = data[0].id;
        return axios.get( `https://jsonplaceholder.typicode.com/users/${userid}/posts` );
    })
    .then( passOnData )
    .then(function( data ) {
        const postId = data[0].id;
        return axios.get( `https://jsonplaceholder.typicode.com/comments?postId=${postId}` );
    })
    .then(function( response ) {
        console.log( response.data );
    })
    .catch(function( error ) {
        console.log( error.message );
    });