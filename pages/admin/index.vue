<template>
 <main class="admin-page">
  <section class="new-post">
    <AppButton @click="$router.push('/admin/new-post')" >Create Post</AppButton>
  </section>
  <section class="exinting-posts">
      <div class="h1">Existing Posts</div>
      <PostList  />
  </section>
 </main>
</template>

<script >
import PostList from "../../components/Posts/PostList";
import AppButton from "../../components/UI/AppButton.vue";

export default {
 components: {
  PostList,
  AppButton
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
