const jwt = require( 'jsonwebtoken' );

const authenticate = ( req, res, next ) => {
    // extract the token
    const token = req.header( 'Authorization' );

    // if token is not present send error
    if( !token ) {
        const err = new Error( 'Token is not sent' );
        err.status = 403;
        return next( err );
    }

    // verify the token - send error on invalid token / send the control to next middleware
    jwt.verify(token, 'shhh...', function(err, claims) {
        if( err ) {
            return res.status( 403 ).json({
                message: 'Go away intruder'
            });
        }

        res.locals.claims = claims;
        
        next();
    });
};

const authorize = ( role ) => {
    return function( req, res, next ) {
        const claims = res.locals.claims;

        if( !claims.roles.includes( role ) ) {
            const error = new Error( 'You are not authorized' );
            error.status = 403;
            return next( error );
        }

        next();
    }
};

module.exports = {
    authenticate,
    authorize
};