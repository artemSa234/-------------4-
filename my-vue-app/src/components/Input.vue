<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    value: [String, Number]
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
