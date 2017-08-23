import setupService from './setupService';

function setupUserService(db) {
    return function() {
        const before = {};
        const after = {};
        return setupService(db, '/api/users', 'users', before, after);
    }
}

export default setupUserService;