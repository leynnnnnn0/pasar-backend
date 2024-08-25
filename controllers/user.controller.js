import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({success: false, message: 'All fields are required'});
    }
    const newUser = new User({
        username,
        email,
        password
    })
    try {
        await newUser.save();
        return res.json({success: true, message: 'New user created.', user: newUser});
    }catch (err){
        return res.json({success: false, message: 'Failed to creat new user.', error: err.message});
    }
}

export const signInUser = async (req, res) => {
    const {email, password} = req.body;
    if( !email || !password){
        return res.status(400).json({success: false, message: 'Can\'t handle request'});
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        res.status(200).json({
            success: true,
            message: 'Sign in successful',
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            },
        });
    }catch (err) {
        console.error('Sign in error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }


}