<script setup lang="ts">
  import { GIcon } from "gwindic/src/components/GIcon"
  import { iconCall } from "gwindic/src/assets/IconsSource"
</script>

<template>
  <div class="w-100 mobile:mx-4 tablet:mx-6 laptop:mx-40 2xl:mx-96">
    <div class="text-red-50">Tailwind Installed</div>

    <div class="flex flex-col gap-2 text-left">
      <p class="text-alpha">label for text-alpha</p>
      <p class="text-beta">label for text-beta</p>
      <p class="text-gamma">label for text-gamma</p>
      <p class="text-delta">label for text-delta</p>
      <p class="text-epsilon">label for text-epsilon</p>
      <p class="text-zeta">label for text-zeta</p>
      <p class="text-kappa">label for text-kappa</p>
      <p class="text-lambda">label for text-lambda</p>
      <p class="text-omicron">label for text-omicron</p>
      <p class="text-sigma">label for text-sigma</p>
      <p class="text-omega">label for text-omega</p>
      <p class="text-atom">label for text-atom</p>
    </div>

    <div class="card p-4 rounded-sm bg-card text-card-foreground overflow-hidden drop-shadow-1 mobile:bg-black-50 tablet:bg-blue-50 laptop:bg-red-50">
      <p class="text-alpha text-lime-50">label for text-alpha</p>
      <GIcon :icon="iconCall" size="sm" color="text-yellow-50" weight="fill" />
    </div>
  </div>
</template>