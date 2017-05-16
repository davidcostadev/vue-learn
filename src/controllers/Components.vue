<script>
  import CardList from '../components/CardList';

  export default {
    components: { CardList },
    data() {
      return {
        cards: [
          {
            title: 'asdsa',
            description: 'asdsad ',
          },
          {
            title: 'xcxzc xzc xz',
            description: 'as cxzc xzcdsad ',
          },
          {
            title: 'asd dsad qwsa',
            description: 'as 12e 12dsad ',
          },
          {
            title: 'd a sd',
            description: 'asd das dsasad ',
          },
        ],
      };
    },
  };
</script>

<template>
  <div>
    <h1>Componentes</h1>
    <card-list
      v-bind:cards="cards"
      class-name="col-md-3"
      class="row"></card-list>
  </div>
</template>
