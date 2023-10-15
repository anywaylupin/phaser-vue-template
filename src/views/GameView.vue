<script setup lang="ts">
import { PhaserGame } from '@/components';
import { setupGame } from '@/core';
</script>

<template>
  <PhaserGame :game="setupGame" />
</template>
