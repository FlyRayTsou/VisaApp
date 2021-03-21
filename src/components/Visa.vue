<template>
  <el-select v-model="ageScore" clearable placeholder="Age">
    <el-option
      v-for="item in age"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import visa from '../assets/js/constant.js'
export default {

  data() {
    return {
      age: visa.options.age,
      ageScore: null
    }
  }
}
</script>