<template>
    <div class="posts-page">
    <PostList :posts="loadedPosts" />
    </div>
</template>


<script >
import PostList from '@/components/Posts/PostList';

export default {
  components: {
   PostList
  },
   asyncData(context) {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({
       loadedPosts: [
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
    }, 1500)
     })
    .then(data => {
      return {
        data
      }
    })
    .catche(event => {
      context.error(new Error())
    })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  },
}
</script>

<style  scope>
.post-page {
  display: flex;
  justify-content: center;
  align-content: center;
}

</style>
