<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello World</h1>
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="'/articles/' + post.id"
      >
        {{ post.title.rendered }}
      </nuxt-link>
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
  mounted() {
    apiService.getAll().then((res) => {
      this.posts = res.data
    })
  },
}
</script>
