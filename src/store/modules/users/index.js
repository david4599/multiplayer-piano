import actions from "./actions";
import mutations from "./mutations";

const state = {
    currentUser: {
        id: null,
        username: 'Linking',
        color: 'yellow'
    }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}