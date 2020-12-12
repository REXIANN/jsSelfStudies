<template>
  <div class="container" id="app">
    <h1>youtube browser를만들어버리게따</h1>
    <SearchBar @input-change="onInputChange"/>
    
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <VideoList @video-select="onVideoSelect" :videos="videos"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import VideoList from '@/components/VideoList.vue'
import VideoDetail from '@/components/VideoDetail.vue'

const API_KEY = process.env.VUE_APP_YOUTUBE_API
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
}
</script>

<style>

</style>
