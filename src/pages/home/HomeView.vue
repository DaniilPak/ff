<template>
  <section class="hero is-primary">
    <b-progress :value="50" size="is-small" type="is-primary"></b-progress>
    <div class="hero-body">
      <p class="title">Welcome to Vue home</p>
      <button class="button is-light" @click="sayHello">Click Me</button>
    </div>
    <div v-for="[key, value] in Object.entries(dummyTasks)" :key="key">
      <strong>{{ key }}:</strong> {{ value }}
    </div>
  </section>
</template>

<script setup lang="ts">
const sayHello = () => alert('Hello from Bulma!')

import type { ITask } from '@/entities/task/types'

const dummyTasks: ITask[] = [
  {
    id: 1,
    title: 'Set up project',
    description: 'Initialize Vue 3 project with Vite and Pinia',
    status: 'done',
  },
  {
    id: 2,
    title: 'Implement task creation',
    description: 'Allow users to add new tasks with a title and description',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Add drag-and-drop support',
    description: 'Enable moving tasks between columns using drag-and-drop',
    status: 'backlog',
  },
  {
    id: 4,
    title: 'Persist tasks with IndexedDB',
    description: 'Store tasks locally using IndexedDB for persistence',
    status: 'backlog',
  },
]
</script>
