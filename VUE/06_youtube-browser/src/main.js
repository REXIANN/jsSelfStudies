import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
export default new Vuex.Store({
  state: {
    inputValue: '',
    videos: [],
    selectedVideo: null,
  },
  getters: {

  },
  mutations: { 
    setInputValue(state, event) { 
      state.inputvalue = event.target.value
    },
    setVideos(state, videos) {
      state.videos = videos
    },
    setSelectedVideo(state, video) { 
      state.selectedVideo = video
    }
  },
  actions: {
    fetchVideos(context, event) {
      //1. inputValue를 바꾼다.abnf
      context.commit('setInputValue', event.target.value)
      // 2. state.inputValue로 요청보낸다.
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: context.state.inputValue
        }
      })
        .then(res => {
          res.data.items.forEach(item => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(item.snippet.title, 'text/html')
            item.snippet.title = doc.body.innerText
          })
          context.commit('setVideos', res.data.items)
        })
        .catch(err => console.log(err))
      // 3. state.videos를 
    }
  }, 
  moduels: {}
})
