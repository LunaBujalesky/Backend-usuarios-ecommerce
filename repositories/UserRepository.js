export default class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getUserByEmail = async (email) => {
        return await this.dao.getByEmail(email);
    };

    createUser = async (user) => {
        return await this.dao.createUser(user);
    };

    getUserById = async (id) => {
        return await this.dao.getById(id);
    };

    updatePassword = async (id, password) => {
        return await this.dao.updatePassword(id, password);
    };
}