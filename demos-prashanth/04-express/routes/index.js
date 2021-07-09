const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    // res.send( 'Welcome to workshops app Home' );
    res.render( 'index' );
});

module.exports = router;