<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineAsyncComponent } from 'vue'
import { GButton, GInputText } from '@/components'

const RemoteComponent = defineAsyncComponent(() => import('remoteApp/RemoteComponent'));
</script>

<template>
  <div>
   INI HOST
  </div>
  <RemoteComponent />
  <Accordion />
  <HelloWorld msg="Vite + Vue" />
  <GButton />
  <GButton
    type="primary"
    size="xl"
    label="Button Primary"
  />

  <GInputText
    id="iniidnumber"
    placeholder="Test placeholder!"
    label="Ini Number Only"
    type="number"
  />
  <GInputText>test</GInputText>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
