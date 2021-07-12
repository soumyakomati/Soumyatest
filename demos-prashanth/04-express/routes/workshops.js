const express = require( 'express' );
const { 
    getWorkshops,
    getWorkshopById,
    postWorkshop,
    patchWorkshop,
    deleteWorkshop
} = require( '../controllers/workshops' );

const router = express.Router();

router.get( '/', getWorkshops );
router.get( '/:id', getWorkshopById );
router.post( '/', postWorkshop );
router.patch( '/:id', patchWorkshop );
router.delete( '/:id', deleteWorkshop );

module.exports = router;