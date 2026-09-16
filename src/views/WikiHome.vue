<template>
  <div class="wiki-home">
    <h1>Wiki Pages</h1>
    <p class="subtitle">Browse the articles below.</p>
    <ul class="page-list">
      <li v-for="page in pages" :key="page.id">
        <RouterLink :to="`/page/${page.id}`">{{ page.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { pages } from '../data/pages.js'
</script>

<style scoped>
.wiki-home h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 1.5rem;
}

.page-list {
  list-style: none;
  padding: 0;
}

.page-list li {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  padding: 1rem 1.25rem;
  transition: box-shadow 0.15s;
}

.page-list li:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-list a {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 500;
}

.page-list a:hover {
  color: #42b883;
}
</style>
