<template>
  <div class="special-slides">
    <h3>Special Slides</h3>
    <div class="special-slides-body">
      <div class="special-slide">
        Title Slide
      </div>
      <div class="special-slide">
        Blank Slide
      </div>

    </div>
  </div>
</template>

<style>
  .special-slides {
  }
  .special-slides-body {
    display: flex;

    flex-direction: column;
  }

  .special-slide {
    display: flex;

  }
</style>

<script>
  export default {
    data () {
      return {
        msg: 'hello vue'
      };
    },
  };
</script>
