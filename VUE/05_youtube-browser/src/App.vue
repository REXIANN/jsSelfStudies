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
import axios from 'axios'
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
  data() {
    return {
      inputValue : '',
      videos: [],
      selectedVideo: null
    }
  },
  methods: {
    onInputChange(inputText) {
      this.inputValue = inputText
      // emit => data를 수정
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: this.inputValue
        }
      })
        .then(res => {
          res.data.items.forEach(item => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(item.snippet.title, 'text/html')
            item.snippet.title = doc.body.innerText
          })
          this.videos = res.data.items
        })
        .catch(err => console.log(err))
    },
    onVideoSelect(video) {
      // console.log('received', video)
      this.selectedVideo = video
    }
  }
}
</script>

<style>

</style>
