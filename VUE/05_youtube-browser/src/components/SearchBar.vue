<template>
  <div >
    <h2>SearchBar Here</h2>
    <input class="search-bar" type="text" @keypress.enter="onInput">
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
input.search-bar {
  text-align: center;
  margin: 20px;
  border: 2px solid green;
}

input.search-bar > input {
  width: 75%;
}
</style>
