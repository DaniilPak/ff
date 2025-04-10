<template>
  <section style="max-height: 100%; overflow-y: auto">
    <button @click="shuffle" type="button">shuffle</button>

    <TransitionGroup tag="a-list" name="fade">
      <li v-for="item in items" :key="item.title" class="item">
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
                  <a-avatar src="https://joeschmoe.io/api/v1/random" />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </ContextWrapper>
        </a-list>
      </li>
    </TransitionGroup>
  </section>
</template>

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

<script lang="ts" setup>
import ContextWrapper from '@/features/contextWrapper/ui/ContextWrapper.vue'
import { shuffle as _shuffle } from 'lodash-es'
import { ref } from 'vue'

interface DataItem {
  title: string
}

const data: DataItem[] = [
  { title: 'Hey, do you support multiple languages in your app?' },
  { title: 'What are your data security practices?' },
  { title: 'Can I integrate this with my existing CRM system?' },
  { title: 'How do I get started with your API?' },
  { title: 'Is there any way to customize the dashboard for my team?' },
  { title: 'What’s the uptime guarantee for your service?' },
  { title: 'Can I try out the features before committing to a subscription?' },
  { title: 'Do you offer any discounts for non-profits?' },
  { title: 'Is there a way to get notifications for new updates?' },
  { title: 'Can I schedule a demo to understand how it works?' },
  { title: 'Do you have a dedicated support team for enterprise clients?' },
  { title: 'What’s the best way to handle large data imports into your system?' },
]

const items = ref(data)

function shuffle() {
  items.value = _shuffle(items.value)
}

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

function handleRemove(item) {
  remove(item)
}

function handleMoveToTheTop(item) {
  moveToTop(item)
}
</script>
