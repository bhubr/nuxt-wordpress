<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello WP + Nuxt</h1>
      <article
        v-for="post in posts"
        :key="post.id"
      >
        <h2 class="title text-danger">{{ post.title.rendered }}</h2>
        <div v-html="post.content.rendered"></div>
        <nuxt-link
          class="btn btn-primary"
          :key="post.id"
          :to="'/articles/' + post.id"
        >
          Read in single page
        </nuxt-link>
      </article>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService'

export default {
  data() {
    return {
      posts: [],
    }
  },
  async asyncData(context) {
    try {
      return apiService.getAll()
        .then(res => {
          return { posts: res.data };
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },
}
</script>
