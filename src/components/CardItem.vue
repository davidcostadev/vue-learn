<script>
  export default {
    // props: ['title', 'description'], old
    props: {
      title: {
        required: true,
        type: String,
      },
      description: {
        required: true,
        type: String,
      },
    },
  };
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img src="https://placehold.it/300x310" alt="">
    </div>
    <div class="card-title">{{title}}</div>
    <div class="card-description">{{description}}</div>
  </div>
</template>

<style>

  .card-image {
    margin-bottom: 15px;
  }
  .card-image img{
    width: 100%;
  }
  .card-title {
    font-size: 18px;
  }
  .card-description {
    font-size: 16px;
    color: gray;
  }
</style>

