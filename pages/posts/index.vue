<template>
    <div class="posts-page">
    <PostList />
    </div>
</template>

<script >
import PostList from '@/components/Posts/PostList';

export default {
  components: {
   PostList
  }
}
</script>

<style  scope>
.post-page {
  display: flex;
  justify-content: center;
  align-content: center;
}

</style>
