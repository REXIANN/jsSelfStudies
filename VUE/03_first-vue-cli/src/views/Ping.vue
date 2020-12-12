<templates>
  <div>
    <h1>Ping</h1>
    <input @keyup.enter="sendToPong" v-model="inputText" type="text">
    <button @click="mm">buttons</button>
    <button @click="mmm">buttons</button>
  </div>
</templates>

<script>
export default {
  name: 'Ping',
  data: function () {
    return { 
      inputText: '',
    }
  },
  methods: {
    mm() {
      this.$router.push({ path: 'register', query: { plan: 'private'}})
    },
    mmm() {
      this.$router.push('/')
    },
    sendToPong: function () {
      this.$router.push({name:'Pong', query: {message: this.inputText}})
      // this.$router.push(`pong?message=${this.inputText}`)
    }
  }
}
</script>

<style>

</style>
