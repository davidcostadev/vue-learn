<script>
import CardItem from './CardItem';

export default {
  components: { CardItem },
  props: {
    cards: {
      required: true,
      type: Array,
    },
    className: String,
  },
};
</script>


<template>
  <div class="cards">
    <card-item
      v-for="(card, index) in cards"
      v-bind:key="index"
      v-bind:class="className"
      v-bind:title="card.title"
      v-bind:description="card.description"></card-item>
  </div>
</template>
