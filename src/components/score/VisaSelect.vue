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
      <el-col :span="2"><div class="grid-content bg-purple">{{ displayScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
</template>

<script>
export default {
  emits: ['setScore'],
  props: {
    itemName: String,
    itemLabel: String,
    items: Object,
  },
  data() {
    return {
      score: -1
    }
  },
  computed: {
    labelText() {
      if(this.itemLabel !== undefined) {
        return this.$i18n.t(`item.${this.itemLabel}`)
      }
      return this.$i18n.t(`item.${this.itemName}`)
    },
    displayScore() {
      if(this.$store.state.scores[this.itemName] === -1) {
        return 0
      }
      return this.$store.state.scores[this.itemName]
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