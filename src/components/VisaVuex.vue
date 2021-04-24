<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Degree</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-select v-model="degreeScore">
            <el-option
            v-for="item in degree"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>  
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ degreeScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">workExperience</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-select v-model="workExperienceScore">
            <el-option
            v-for="item in workExperience"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>  
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ workExperienceScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Salary</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-select v-model="salaryValue" @change="salaryScoreCalculate" clearable>
            <el-option
            v-for="item in salary"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>  
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ salaryScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Age</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-select v-model="ageScore" @change="salaryScoreCalculate" clearable>
            <el-option
            v-for="item in age"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>  
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ ageScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Research Achievement</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-checkbox-group v-model="researchAchievementChecked" style="text-align:left;">
          <el-checkbox
            v-for="item in researchAchievement"
            :key="item.key"
            :label="item.key">
            {{ item.text }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ researchAchievementScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">資格</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-radio-group v-model="qualificationsScore">
          <el-radio v-for="item in qualifications" :key="item.value" :label="item.value">{{ item.text }}</el-radio>
        </el-radio-group>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ qualificationsScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Special Plus</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-checkbox-group v-model="specialPlusChecked">
          <el-checkbox
            v-for="item in specialPlus"
            :key="item.key"
            :label="item.key">
            {{ item.text }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ specialPlusScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Special Plus Research</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-checkbox v-model="specialPlusResearchChecked">{{ specialPlusResearch.text }}</el-checkbox>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">{{ specialPlusResearchScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-divider></el-divider>
  <span>{{ totalScore }}</span>
  
</template>

<script>
import calculate from '../assets/js/calculate.js'
export default {
  data() {
    return {
      degree: this.$store.state.options.degree,
      workExperience: this.$store.state.options.workExperience,
      salary: this.$store.state.options.salary,
      salaryValue: null,
      age: this.$store.state.options.age,
      ageScore: null,
      researchAchievement: this.$store.state.options.researchAchievement,
      researchAchievementChecked: [],
      qualifications: this.$store.state.options.qualifications,
      qualificationsScore: null,
      specialPlus: this.$store.state.options.specialPlus,
      specialPlusChecked: [],
      specialPlusResearch: this.$store.state.options.specialPlusResearch,
      specialPlusResearchChecked: false,
    }
  },
  computed: {
      degreeScore: {
        get: function() {
          return this.$store.state.scores.degree
        },
        set: function(value) {
          this.$store.dispatch('setScore', {key:'degree', score:value})
        },
      },
      workExperienceScore: {
        get: function() {
          return this.$store.state.scores.workExperience
        },
        set: function(value) {
          this.$store.dispatch('setScore', {key:'workExperience', score:value})
        },
      },
      salaryScore() {
        return this.$store.state.scores.salary
      },
      researchAchievementScore() {
        return this.researchAchievementChecked.length > 0 ? 15 : 0
      },
      specialPlusScore() {
        return calculate.specialPlusScore(this.specialPlusChecked)
      },
      specialPlusResearchScore() {
        return this.specialPlusResearchChecked ? 5 : 0
      },
      totalScore() {
        const scores = [this.degreeScore, this.workExperienceScore, this.salaryScore, this.ageScore, this.researchAchievementScore, this.qualificationsScore, this.specialPlusScore, this.specialPlusResearchScore]
        return calculate.totalScore(scores);
      },
  },
  methods: {
    salaryScoreCalculate() {
      this.$store.dispatch('setScore', {key:'salary', score:calculate.salaryScore(this.salaryValue, this.ageScore)})
    },
  }
}
</script>