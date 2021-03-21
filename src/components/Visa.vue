<template>
  <el-select v-model="value" clearable placeholder="Age">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 0,
          label: '>39'
        }, {
          value: 5,
          label: '35~39'
        }, {
          value: 10,
          label: '30~34'
        }, {
          value: 15,
          label: '<30'
        }],
        value: null
      }
    }
  }
</script>