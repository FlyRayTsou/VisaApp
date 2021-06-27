<template>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">{{ labelText }}</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-select v-model="score" @change="update">
              <el-option
              v-for="item in items"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ score }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
</template>

<script>
export default {
  emits: ['update'],
  props: {
    itemName: String,
    itemLabel: String,
    items: Object,
  },
  data() {
    return {
      score: null
    }
  },
  computed: {
    labelText() {
      if(this.itemLabel !== undefined) {
        return this.$i18n.t(`item.${this.itemLabel}`)
      }
      return this.$i18n.t(`item.${this.itemName}`)
    }
  },
  methods: {
    update() {
      this.$emit('setScore', { key: this.itemName, value: this.score })
    }
  }
}
</script>

<style scoped>
.text-align-left {
  text-align: left;
}
</style>