<template>
  <div class="parent">
    <h1>Parent Component</h1>
    <!-- 3. 사용 -->
    <!-- 1. prop 이름="내용" -->
    <Child @hungry="onHungrySignal" :propFromParent="parentMsg"/>
    <!-- 2. emit @cutomEvent를 듣고 그 다음일을 한다. -->
  </div>
</template>

<script>
// 1. import
import Child from '../components/Child.vue'
export default {
  name: 'Parent',
  data: function () {
    return {
      parentMsg: "부모에서 내리는 메시지"
    }
  },
  components: {
    // 2. 등록
    // 'Child': Child,
    Child,
  },
  methods: {
    onHungrySignal(menu1, menu2) {
      console.log(menu1, menu2)
    }
  }
}
</script>

<style>
  .parent {
    border: 3px solid red;
    margin: 3px;
    padding: 3px;

}
</style>
