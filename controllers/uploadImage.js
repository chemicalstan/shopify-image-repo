module.exports = {
/**
 * upload Image
 * @param {objec} req
 * @param {object} res
 * @returns {object} reflection object
 */
    uploadImage : (req, res)=>{
        const user = req.user;
        const { image_url, description, tag } = req.body;
        // Get image field from this user
        const { image } = user;
        // Post image to database
    }
}