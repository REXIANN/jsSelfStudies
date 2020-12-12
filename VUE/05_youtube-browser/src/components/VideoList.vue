<template>
  <ul class="list-group col-lg-4">
    <VideoListItem 
      @video-select="onVideoSelect"
      :video="video" 
      v-for="video in videos" 
      :key="video.etag"
    />
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

export default {
  name: 'VideoList',
  props: {
    videos: Array
  },
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect(video) {
      console.log('Video Selected!')
      this.$emit('video-select', video)
    }
  }
}
</script>

<style>

</style>
