<template>
 <main class="admin-page">
  <section class="new-post">
    <button @click="$router.push('/admin/new-post')" >Create Post</button>
  </section>
  <section class="exinting-posts">
      <div class="h1">Existing Posts</div>
      <PostList isAdmin />
  </section>
 </main>
</template>

<script >
import PostList from "../../components/Posts/PostList";

export default {
 components: {
  PostList
 }
}


</script>

<style  scope>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

</style>
