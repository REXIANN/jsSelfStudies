<template>
  <ul class="list-group col-lg-4">
    <VideoListItem 
      :video="video" 
      v-for="video in $store.state.videos" 
      :key="video.etag"
    />
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
import {mapstate} from 'vuex'
export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  methods: {

  },
  data() {
    return {
      ...mapState(['videos'])
    }
  }
}
</script>

<style>

</style>
