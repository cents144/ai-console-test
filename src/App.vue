<template>
  <div id="app-wrapper">
    <header>
      <nav>
        <RouterLink to="/">📖 Vue Wiki</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p>Vue Wiki — built with Vue 3 &amp; Vue Router</p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  background: #f5f5f5;
  color: #333;
}

#app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: #2c3e50;
  padding: 1rem 2rem;
}

header a {
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
}

main {
  flex: 1;
  max-width: 860px;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
}

footer {
  background: #2c3e50;
  color: #aaa;
  text-align: center;
  padding: 1rem;
  font-size: 0.85rem;
}
</style>
