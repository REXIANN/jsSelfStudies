<template>
  <div class="child"> 
    {{ propFromParent }}
    <!-- 3. 사용한다 -->
    <button @click="hungrySignal">배고파잉</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  // 2. props 받기
  props: {
    propFromParent: String
  },
  methods: {
    hungrySignal : function () {
      // 부모에게 이벤트 또는 시그널을 방출
      this.$emit('hungry', '햄버거가 먹고 싶은데...', '피자도..') // 커스텀 이벤트
    }
  }
}
</script>

<style>
  .child {
    border: 3px solid blue;
    margin: 3px;
    padding: 3px;
  }
</style>
