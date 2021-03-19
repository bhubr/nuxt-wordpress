<template>
  <div v-if="article" class="container">
    <h1 class="title">{{ article.title.rendered }}</h1>
    <div v-html="article.content.rendered"></div>
  </div>
</template>

<script>
import apiService from '@/services/apiService'

export default {
  data() {
    return {
      article: null,
    }
  },
  mounted() {
    apiService.getOneById(this.$route.params.id).then((res) => {
      this.article = res.data
    })
  },
}
</script>
