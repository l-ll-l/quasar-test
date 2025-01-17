<template>
  <!-- 这里可以使用普通的模板语法 -->
  <div>
    <h1>{{ message }}</h1>
    <div id="tsx-container">
      <!-- 渲染由 TSX 组件返回的内容 -->
      <TsxComponent :count="count" />
    </div>
    <button @click="incrementCount">Increment Count</button>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue';

// 普通的响应式数据
const message = ref('Vue with TSX Example');
const count = ref(0);

// 定义一个函数，用于增加 count 的值
const incrementCount = () => {
  count.value++;
};

// 定义一个 TSX 组件
const TsxComponent = (props: { count: number }) => {
  return (
    <div>
      <p>Count from TSX Component: {props.count}</p>
    </div>
  );
};
</script>

<style scoped>
#tsx-container {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}
</style>
