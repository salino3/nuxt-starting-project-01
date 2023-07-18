 <!-- npm install --save .vuex
 npm list vue vue-server-renderer
 npm update vue vue-server-renderer
 npm install vue@2.7.14 vue-server-renderer@2.7.14 (Vue y Vuex deben tener la misma versión)

 -->
<template>
  <main class="home-page">
    <section class="intro">
      <h1>Get the last tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
   setTimeout(() => {
      callback(null, {loadedPosts: [
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
       ]
      })
    }, 1500);
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },

}
</script>

<style  scope>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/images/gato-blanco-01.jpg");
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
