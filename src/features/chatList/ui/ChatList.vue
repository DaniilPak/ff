<template>
  <section style="max-height: 100%; overflow-y: auto">
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <ContextWrapper>
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
      </template>
    </a-list>
  </section>
</template>

<style scoped>
.hover-item {
  transition: all 0.3s ease;
}

.hover-item:hover {
  background-color: #f0f0f0; /* Highlight background */
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
}
</style>

<script lang="ts" setup>
import ContextWrapper from '@/features/contextWrapper/ui/ContextWrapper.vue'

interface DataItem {
  title: string
}
const data: DataItem[] = [
  {
    title: 'Hey, do you support multiple languages in your app?',
  },
  {
    title: 'What are your data security practices?',
  },
  {
    title: 'Can I integrate this with my existing CRM system?',
  },
  {
    title: 'How do I get started with your API?',
  },
  {
    title: 'Is there any way to customize the dashboard for my team?',
  },
  {
    title: 'What’s the uptime guarantee for your service?',
  },
  {
    title: 'Can I try out the features before committing to a subscription?',
  },
  {
    title: 'Do you offer any discounts for non-profits?',
  },
  {
    title: 'Is there a way to get notifications for new updates?',
  },
  {
    title: 'Can I schedule a demo to understand how it works?',
  },
  {
    title: 'Do you have a dedicated support team for enterprise clients?',
  },
  {
    title: 'What’s the best way to handle large data imports into your system?',
  },
]
</script>
