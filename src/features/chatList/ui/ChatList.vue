<template>
  <section style="max-height: 100%; overflow-y: auto">
    <TransitionGroup tag="a-list" name="fade">
      <li
        v-for="(item, index) in items"
        :key="item.title"
        class="item"
        draggable="true"
        @dragstart="onDragStart(index)"
        @dragover.prevent
        @drop="onDrop(index)"
      >
        <a-list item-layout="horizontal">
          <ContextWrapper
            :key="item"
            :item="item"
            @remove="handleRemove"
            @totop="handleMoveToTheTop"
          >
            <a-list-item class="hover-item">
              <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <template #title>
                  <a>{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar src="" />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </ContextWrapper>
        </a-list>
      </li>
    </TransitionGroup>
  </section>
</template>

<script lang="ts" setup>
import ContextWrapper from '@/features/contextWrapper/ui/ContextWrapper.vue'
import { ref, onMounted } from 'vue'

interface DataItem {
  title: string
}

const data: DataItem[] = [
  { title: 'Hey, do you support multiple languages in your app?' },
  { title: 'What are your data security practices?' },
  { title: 'Can I integrate this with my existing CRM system?' },
  { title: 'How do I get started with your API?' },
]

const items = ref()
let draggedItemIndex: number | null = null

onMounted(() => {
  console.log('Mounted')
  items.value = data
})

function remove(item: DataItem) {
  const index = items.value.indexOf(item)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

function moveToTop(item: DataItem) {
  const index = items.value.indexOf(item)
  if (index > -1) {
    items.value.splice(index, 1)
    items.value.unshift(item)
  }
}

function handleRemove(item: DataItem) {
  remove(item)
}

function handleMoveToTheTop(item: DataItem) {
  moveToTop(item)
}

function onDragStart(index: number) {
  draggedItemIndex = index
}

function onDrop(index: number) {
  if (draggedItemIndex !== null && draggedItemIndex !== index) {
    const movedItem = items.value[draggedItemIndex]
    items.value.splice(draggedItemIndex, 1)
    items.value.splice(index, 0, movedItem)
  }
  draggedItemIndex = null
}
</script>

<style scoped>
li {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-height: 200px; /* Set a max-height that is large enough */
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease; /* Add transform transition */
}

.hover-item {
  transition: all 0.3s ease;
}

.hover-item:hover {
  background-color: #f0f0f0; /* Highlight background */
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease,
    transform 0.3s ease; /* Add transform to the transitions */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0; /* Collapse height to 0 when leaving */
  transform: translateY(20px); /* Add slight downward movement when leaving */
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  max-height: 200px; /* Expand back to the max height when entering */
  transform: translateY(0); /* Reset transform to original position */
}

/* Specific for moving items to the top smoothly */
.fade-move {
  /* transform: translateY(-10px); */
  /* Slight move when element moves to the top */
}
</style>
