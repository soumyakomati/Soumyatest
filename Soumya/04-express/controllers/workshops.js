const mongoose = require( 'mongoose' );
const Workshop = mongoose.model( 'Workshop' );

// GET /workshops?page=2&pageSize=5
const getWorkshops = ( req, res, next ) => {
    let { page, pageSize, search } = req.query;
    page = +page;
    pageSize = +pageSize;

    let filterClause = {};
    if( search ) { // { name: /Angular/i }
        filterClause.name = new RegExp( search, 'i' );
    }

    Workshop
        .find( filterClause )
        .select( { name: true, modes: true, _id: false } )
        .sort( { name: 'asc' } )
        .skip( ( page - 1 ) * pageSize )
        .limit( pageSize )
        .exec( ( err, results ) => {
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

    // not a proper object id
    if( id.length !== 24 ) {
        const err = new Error( 'Workshop with matching id not found' );
        err.status = 404;
        next( err );
        return;
    }
    
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

            // if no matching id (hence no worshop is retrieved)
            if( !workshop ) {
                const err = new Error( 'Workshop with matching id not found' );
                err.status = 404;
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
                if( err instanceof mongoose.Error.ValidationError ) {
                    err.status = 400; // Bad request
                } else {
                    err.status = 500; // Internal server error ( eg. DB connection issue)
                }

                next( err );
                return;
            }

            // 201 is status code for "new resource is created"
            res.status( 201 ).json( updatedWorkshop );
        })
};

const patchWorkshop = ( req, res, next ) => {
    const workshop = req.body;
    const { id } = req.params;

    Workshop
        .findByIdAndUpdate( id, workshop, { /*new: true*/ runValidators: true }, ( err, updatedWorkshop ) => {
            if( err ) {
                if( err instanceof mongoose.Error.ValidationError ) {
                    err.status = 400; // Bad request
                } else {
                    err.status = 500; // Internal server error ( eg. DB connection issue)
                }

                next( err );
                return;
            }

            res.json( updatedWorkshop );
        })
};

const postWorkshopMode = ( req, res, next ) => {
    const body = req.body;
    let workshops;

    if( typeof body === 'string' ) {
        workshops = [ body ];
    } else if( body instanceof Array ) {
        workshops = body;
    } // else -> send an error (@todo)

    const { id } = req.params;

    const updateClause = {
        $addToSet: {
            modes: {
                $each: workshops
            }
        }
    };

    Workshop
        .findByIdAndUpdate( id, updateClause, { /*new: true*/ runValidators: true }, ( err, updatedWorkshop ) => {
            if( err ) {
                if( err instanceof mongoose.Error.ValidationError ) {
                    err.status = 400; // Bad request
                } else {
                    err.status = 500; // Internal server error ( eg. DB connection issue)
                }

                next( err );
                return;
            }

            res.json( updatedWorkshop );
        })
};

const deleteWorkshop = ( req, res, next ) => {
    const { id } = req.params;

    Workshop
        .findByIdAndRemove( id, ( err ) => {
            if( err ) {
                err.status = 500; // Internal server error ( eg. DB connection issue)
                next( err );
                return;
            }

            // Use 204 for empty response
            res.status( 204 ).send();
        })
};

module.exports = {
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    patchWorkshop,
    postWorkshopMode,
    deleteWorkshop
};