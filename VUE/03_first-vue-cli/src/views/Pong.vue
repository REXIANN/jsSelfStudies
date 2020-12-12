<template>
  <div>
    <h2>Pong</h2> 
    <p>{{ messageFromPing }}</p>

  </div>
</template>

<script>
export default {
  name: 'Pong',
  data: function () {
    return {
      messageFromPing: this.$route.query.message
    }
  }
}
</script>

<style>

</style>
