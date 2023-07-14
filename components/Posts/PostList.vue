<template>
     <section class="posts-list">
        <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://tse1.mm.bing.net/th?id=OIP.FrofFN4Fron88i3gnooF7wHaGa&pid=Api&rs=1&c=1&qlt=95&w=119&h=103"
        title="Hello there"
        previewText="This is my first post!" />
        <PostPreview
        id="2"
        :is-admin="!isAdmin"
        thumbnail="https://tse1.mm.bing.net/th?id=OIP.FrofFN4Fron88i3gnooF7wHaGa&pid=Api&rs=1&c=1&qlt=95&w=119&h=103"
        title="Hello there"
        previewText="This is my second post!" />
        <PostPreview
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://tse1.mm.bing.net/th?id=OIP.FrofFN4Fron88i3gnooF7wHaGa&pid=Api&rs=1&c=1&qlt=95&w=119&h=103"
        title="Hello there"
        previewText="This is my third post!" />
    </section>
</template>


<script >
import PostPreview from '@/components/Posts/PostPreview';

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style  scope>


.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
