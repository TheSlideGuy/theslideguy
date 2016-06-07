<template>
  <div :slides="slides" class="lyrics">
    <div class="lyrics-head">Slides</div>
    <div v-for="slide in slides">
      <ul v-for="line in slide">
        <li>{{line}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
//        slides: [
//          [
//            'Light of the world, You step down into darkness.',
//            'Opened my eyes let me see.',
//            'Beauty that made this heart adore you',
//            'hope of a life spent with you.'
//          ],
//          [
//            'And here I am to worship,',
//            'Here I am to bow down,',
//            'Here I am to say that you\'re my God,',
//            'You\'re altogether lovely,',
//            'Altogether worthy,',
//            'Altogether wonderful to me.'
//          ]
//        ]

      };
    },
    props: ['slides']
//    components: {
//      slide: {
//        el: '#slide'
//      }
//    }
  };
</script>

<style>
  .lyrics {
    display: flex;
    height: 100%;
    flex-basis: 30%;
    flex-grow: 1;
    background-color: #eee;
    border: 1px solid #aaa;

    flex-direction: column;
  }

  .lyrics-head {
    font-size: 3rem;
  }

</style>
