export const pages = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `Welcome to the Vue Wiki!\n\nThis wiki is built with Vue 3 and Vue Router. Use the navigation to explore articles.\n\nYou can add new pages by editing src/data/pages.js.`,
  },
  {
    id: 'vue-basics',
    title: 'Vue Basics',
    content: `Vue is a progressive JavaScript framework for building user interfaces.\n\nKey Concepts:\n\nReactivity — Vue automatically tracks data changes and updates the DOM.\n\nComponents — Build UIs using reusable, self-contained components.\n\nDirectives — Special attributes like v-if, v-for, and v-bind.`,
  },
  {
    id: 'vue-router',
    title: 'Vue Router',
    content: `Vue Router is the official router for Vue.js.\n\nIt integrates deeply with Vue to make building single-page applications easy.\n\nFeatures include nested routes, route params and query strings, navigation guards, and lazy-loaded routes.`,
  },
]

export function getPageById(id) {
  return pages.find((p) => p.id === id) || null
}
