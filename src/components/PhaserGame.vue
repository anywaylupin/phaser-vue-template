<template>
  <div class="game">
    <PhaserGame v-if="game" :createGame="game" />

    <div class="buttons">
      <button type="button" @click="pause">✋ Pause</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhaserGame from 'nuxtjs-phaser/phaserGame.vue';

defineProps<{ game: () => Phaser.Game }>();
defineEmits<(e: 'game:pause', data: any) => void>();

const emit = (eventName: string) => NuxtPhaser.eventEmitter?.emit(eventName);
const pause = () => emit('game:pause');
</script>

<style scoped>
.buttons {
  display: inline;
  position: absolute;
  left: 28rem;
  top: 7rem;
  z-index: 1;
}

button {
  background-color: #fff;
  border: none;
  color: black;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 8px;
  font-weight: 500;
}

button:hover {
  background-color: tomato;
  font-weight: 500;
}
</style>
