import Vuex from 'vuex';

const createStore = () => {

  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {

        
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    vuexContext.commit('setPosts', [
        {
          id: "1",
          isAdmin: true,
          thumbnail: "https://tse1.mm.bing.net/th?id=OIP.FrofFN4Fron88i3gnooF7wHaGa&pid=Api&rs=1&c=1&qlt=95&w=119&h=103",
          title: "Hello there",
          previewText: "This is my first post!",
        },
        {
          id: "2",
          isAdmin: false,
          thumbnail: "https://tse1.mm.bing.net/th?id=OIP.FrofFN4Fron88i3gnooF7wHaGa&pid=Api&rs=1&c=1&qlt=95&w=119&h=103",
          title: "Hello there, this is the second post",
          previewText: "This is my second post!",
        }
       ])

       resolve();
    }, 1500);
     });

  },


  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts)
  }

    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
};

export default createStore;
