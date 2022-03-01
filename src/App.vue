<template>
  <h1>
    {{ msg }}
  </h1>
  <input
    type="text"
    v-model="msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello',
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
