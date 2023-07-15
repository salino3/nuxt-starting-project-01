<template>
 <main class="admin-post-page">
  <section class="update-form">
  <AdminPostForm
  :post="loadedPost"
  />
  </section>
 </main>
</template>

<script >
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default {
    layout: 'admin',
  components: {
   AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Joe",
        title: "My Post title",
        conent: 'This is my post!',
        thumnailLink: "https://www.nationalgeographic.com.es/medio/2019/02/25/de-tal-palo-tal-astilla_2fc89eb0_800x800.jpg"
      }
    }
  }
 }

</script>

<style scope>
 .update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
