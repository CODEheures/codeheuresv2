import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      pages: ['index', 'prestations', 'contact']
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

export default createStore