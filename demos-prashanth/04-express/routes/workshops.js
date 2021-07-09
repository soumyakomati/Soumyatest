const express = require( 'express' );
const { 
    getWorkshops,
    getWorkshopById,
    postWorkshop
} = require( '../controllers/workshops' );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/:id', getWorkshopById );
router.post( '/', postWorkshop );

module.exports = router;