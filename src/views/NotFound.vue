<template>
  <div class="not-found-view">
    <h1>404 — Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <RouterLink to="/">Go back to the Wiki</RouterLink>
  </div>
</template>

<style scoped>
.not-found-view {
  text-align: center;
  padding: 3rem 1rem;
}

.not-found-view h1 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: #c0392b;
}

.not-found-view p {
  margin-bottom: 1.25rem;
  color: #666;
}

.not-found-view a {
  color: #42b883;
}
</style>
