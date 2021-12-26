import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTile: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        blogTile: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 2, 2021",
      },
      {
        blogTile: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 3, 2021",
      },
      {
        blogTile: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 4, 2024",
      },
    ],
    editPost: null,
  },
  mutations: {
    SET_TOGGLE_EDIT_POST(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
  },
  actions: {},
  modules: {},
});
