<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Item"
      width="180">
        <template v-slot="scope">
            {{ scope.row.item }}
        </template>
    </el-table-column>
    <el-table-column
      label="Choose"
      width="180"
      v-slot="scope"
      >
        <el-select v-model="scope.row.modelKey" clearable>
            <el-option
            v-for="item in scope.row.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-table-column>
    <el-table-column label="Scores">
        <template v-slot="scope">
            {{ scope.row.modelKey }}
        </template>
    </el-table-column>
  </el-table>
  <span>{{ totalScore }}</span>
</template>

<script>
import visa from '../assets/js/constant.js'
import calculate from '../assets/js/calculate.js'
export default {
  data() {
    return {
      age: visa.options.age,
      ageScore: null,
      degree: visa.options.degree,
      degreeScore: null,
        tableData: [{
          item: 'Age',
          options: visa.options.age,
          modelKey: null,
          eachScore: this.ageScore
        }, {
          item: 'Degree',
          options: visa.options.degree,
          modelKey: null,
          eachScore: this.degreeScore
        }]
    }
  },
  computed: {
      totalScore() {
          return calculate.totalScore(this.tableData)
      },
  }
}
</script>