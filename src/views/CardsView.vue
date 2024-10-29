<template>
    <div class="text-content">
      <h1>Your tasks</h1>
      <ul class="list">
  
          {{ card.title }}
  
          
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useTelegram } from '../../services/telegram'
  import { useAppStore } from '@/stores/app'
  import { onMounted } from 'vue'
  
  const { tg } = useTelegram()
  const app = useAppStore()
  
  onMounted(() => {
    app.fetchCards()
  })
  
  
  </script>
  