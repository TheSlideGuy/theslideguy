<template>
  <div class="" id="app">
    <!--<div class="row">-->
    <lyrics :slides="slides"></lyrics>

    <div class="middle-pane">
      <special-slides></special-slides>
    </div>
    <settings-pane></settings-pane>
    <!--</div>-->
  </div>
</template>

<script>

  import Lyrics from 'components/lyrics';
  import SettingsPane from 'components/settings-pane';
  import SpecialSlides from 'components/special-slides.vue';

  export default {
    components: {
      Lyrics,
      SettingsPane,
      SpecialSlides
    },
    data () {
      return {
        slides: [
          [
            'Light of the world, You step down into darkness.',
            'Opened my eyes let me see.',
            'Beauty that made this heart adore you',
            'hope of a life spent with you.'
          ],
          [
            'And here I am to worship,',
            'Here I am to bow down,',
            'Here I am to say that you\'re my God,',
            'You\'re altogether lovely,',
            'Altogether worthy,',
            'Altogether wonderful to me.'
          ]
        ]
      };
    },
  };

</script>

<style lang="less">

  /*@import "../vendor/semantic/src/semantic.less";*/

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: Source Sans Pro, sans-serif;
    margin: 0;
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .middle-pane {
    display: flex;
    height: 100%;

    flex-grow: 1;
  }


</style>
