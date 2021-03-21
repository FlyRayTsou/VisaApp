<template>
  <el-select v-model="ageScore" clearable placeholder="Age">
    <el-option
      v-for="item in age"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="degreeScore" clearable placeholder="Degree">
    <el-option
      v-for="item in degree"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <span>{{ totalScore }}</span>
</template>

<script>
import visa from '../assets/js/constant.js'
export default {
  data() {
    return {
      age: visa.options.age,
      ageScore: null,
      degree: visa.options.degree,
      degreeScore: null,
    }
  },
  computed: {
      totalScore() {
          return this.ageScore + this.degreeScore
      }
  }
}
</script>