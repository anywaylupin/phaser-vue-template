<script setup lang="ts">
import { PhaserGame } from '@/components';
import { gameConfig } from '@/game-example';
</script>

<template>
  <div class="game-module">
    <phaser-game :game-config="gameConfig" />
  </div>
</template>

<style scoped lang="scss">
.game-module {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
@/game-example
