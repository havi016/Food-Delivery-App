const express = require('express');
const {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    loginUser,
    auth,
    getCurrentUser,
    } = require("../controller/user-controller");

const router = express.Router();

router.get("/", auth, getAllUsers);
router.post('/sign-up', addUser);
router.post('/sign-in', loginUser);
router.get('/current-user',auth, getCurrentUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);
router.get('/:id', getUserById);

module.exports = router;