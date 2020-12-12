<template>
  <div class="search-bar">
    <h2>SearchBar Here</h2>
    <input type="text" @keypress.enter="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      // emit 1. 위로 이벤트를 쏜다
      this.$emit('input-change', event.target.value)
    }
  }

}
</script>

<style>
div.search-bar {
  text-align: center;
  margin: 20px;
}

div.search-bar > input {
  width: 75%;
}
</style>
