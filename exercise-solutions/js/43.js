const axios = require( 'axios' );

// 42. Given the following APIs
// * Retrieve users with a particular username (in the example below, username is Bret)
// ```
// https://jsonplaceholder.typicode.com/users?username=Bret
// ```
function passOnData( response ) {
    return response.data;
}

async function logComments() {
    try {
        let response;
        response = await axios.get( `https://jsonplaceholder.typicode.com/users?username=Bret` );
        
        const userid = response.data[0].id;
        response = await axios.get( `https://jsonplaceholder.typicode.com/users/${userid}/posts` );
        
        const postId = response.data[0].id;
        response = await axios.get( `https://jsonplaceholder.typicode.com/comments?postId=${postId}` );
        
        console.log( response.data );
    } catch( err ) {
        console.log( err.message );
    }
}

logComments();