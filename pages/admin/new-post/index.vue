<template>
 <main class="admin-new-post-page">
  <section class="new-post-form">
   <AdminPostForm @submit="onSubmitted" />
  </section>
 </main>
</template>

<script >
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

export default {
  components: {
   AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      
    }
  }
 }
</script>

<style scope>
 .new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
