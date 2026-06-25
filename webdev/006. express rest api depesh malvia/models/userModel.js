const mongoose = require ("mongoose");

const userSchema = mongoose.Schema ({
    username: {
        type: String,
        required: [true, "please add the user name"],
    },
    email: {
        type: String,
        required: [true, "please add the email address"],
        unique: [true, "email address aldready taken"],
    },
    password: {
        type: String,
        required: [true, "please add the user password"],
    },
}, {
    timestamps: true,
}
);

module.exports=mongoose.model ("users1", userSchema);
