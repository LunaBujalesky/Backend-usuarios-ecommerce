import UserModel from "../models/User.js";

export default class UserDAO {
    getByEmail = async (email) => {
        return await UserModel.findOne({ email });
    };

    createUser = async (user) => {
        return await UserModel.create(user);
    };

    getById = async (id) => {
        return await UserModel.findById(id);
    };

    updatePassword = async (id, newPassword) => {
        return await UserModel.findByIdAndUpdate(id, { password: newPassword });
    };
}