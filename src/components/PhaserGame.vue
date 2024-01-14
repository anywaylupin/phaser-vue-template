<template>
  <div ref="parent" style="display: flex; height: 100%; width: 100%"></div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

interface PhaserGameProps {
  gameConfig: Phaser.Types.Core.GameConfig;
}

const { gameConfig } = defineProps<PhaserGameProps>();

const game = ref<Phaser.Game>();

const parent = ref<HTMLElement>();

onMounted(() => {
  nextTick(() => {
    if (parent.value) {
      parent.value.id = gameConfig.parent as string;
      game.value = new Phaser.Game(gameConfig);
    }
  });
});

onBeforeUnmount(() => game.value?.destroy(true));
</script>
