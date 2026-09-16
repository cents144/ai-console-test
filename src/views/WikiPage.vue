<template>
  <div class="wiki-page">
    <RouterLink to="/" class="back-link">← Back to Wiki</RouterLink>
    <article v-if="page">
      <h1>{{ page.title }}</h1>
      <div class="content">
        <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPageById } from '../data/pages.js'

const route = useRoute()
const router = useRouter()
const page = computed(() => getPageById(route.params.id))
const paragraphs = computed(() =>
  page.value ? page.value.content.split('\n\n').filter(Boolean) : []
)

watchEffect(() => {
  if (route.params.id && page.value === null) {
    router.replace('/not-found')
  }
})
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 1.25rem;
  color: #42b883;
  text-decoration: none;
  font-size: 0.95rem;
}

.back-link:hover {
  text-decoration: underline;
}

article {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 2rem;
}

article h1 {
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  color: #2c3e50;
}

.content p {
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #444;
}

.not-found {
  color: #c0392b;
  font-size: 1.1rem;
}
</style>
