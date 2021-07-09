const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

const getWorkshops = ( req, res, next ) => {
    Workshop
        .find(( err, results ) => {
            if( err ) {
                err.status = 500;
                next( err );
                return;
            }

            res.json( results );
        })
};

const getWorkshopById = ( req, res, next ) => {
    const id = req.params.id;
    
    // similarly use query params
    // const id = req.query.x;
    // const id = req.query.y;

    Workshop
        .findById( id, ( err, workshop ) => {
            if( err ) {
                err.status = 500;
                next( err );
                return;
            }

            res.json( workshop );
        })
};

const postWorkshop = ( req, res, next ) => {
    const workshop = req.body;

    Workshop
        .create( workshop, ( err, updatedWorkshop ) => {
            if( err ) {
                err.status = 500;
                next( err );
                return;
            }

            res.json( updatedWorkshop );
        })
};

module.exports = {
    getWorkshops,
    getWorkshopById,
    postWorkshop
};