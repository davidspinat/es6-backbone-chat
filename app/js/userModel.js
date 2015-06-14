import Backbone from 'backbone';

export default class User extends Backbone.Model {

    constructor() {
        super(...arguments);
    }

    defaults() {
        return {
            title: 'User'
        };
    }

    // override default backbone method
    sync() {
        return false;
    }

}