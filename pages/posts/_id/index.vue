<template>
  <div class="single-post-page">
    <section clss="post-title">
      <h1 class="title">
        {{ loadedPost.title }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
         Last update on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">
          Write by {{ loadedPost.author }}
        </div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
     <p>Let me know what you think about the post, send a mail to
      <a href="mailto:mario@gmail.com">mario@gmail.com</a>
    </p>
    </section>
  </div>
</template>

<script>

export default {
  asyncData(context, callback) {
     setTimeout(() => {
      callback(new Error(), {
        loadedPost:  {
          id: "3",
          isAdmin: true,
          thumbnail: "https://tse1.mm.bing.net/th?id=OIP.FrofFN4Fron88i3gnooF7wHaGa&pid=Api&rs=1&c=1&qlt=95&w=119&h=103",
          title: "This Post (ID: " + context.params.id + ")",
          author: "Joe",
          updatedDate: new Date(),
          content: "Some content",
          previewText: "This is my post!",
        },
      })
     }, 1000)
  }
}
</script>

<style scope>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
