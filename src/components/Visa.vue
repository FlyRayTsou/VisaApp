<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">Degree</div></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-select v-model="degreeScore" clearable>
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
        <el-select v-model="workExperienceScore" clearable>
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
        <el-select v-model="salaryValue" clearable>
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
        <el-select v-model="ageScore" clearable>
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
    <el-col :span="10">
      <div class="grid-content bg-purple">
        <el-checkbox-group v-model="researchAchievementChecked">
          <el-checkbox
            v-for="item in researchAchievement"
            :key="item.key"
            :label="item.key">
            {{ item.text }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-col>
    <el-col :span="2"><div class="grid-content bg-purple">{{ researchAchievementScore }}</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">Link</div></el-col>
  </el-row>
  <el-divider></el-divider>
  <span>{{ totalScore }}</span>
</template>

<script>
import visa from '../assets/js/constant.js'
import calculate from '../assets/js/calculate.js'
export default {
  data() {
    return {
      degree: visa.options.degree,
      degreeScore: null,
      workExperience: visa.options.workExperience,
      workExperienceScore: null,
      salary: visa.options.salary,
      salaryValue: null,
      age: visa.options.age,
      ageScore: null,
      researchAchievement: visa.options.researchAchievement,
      researchAchievementChecked: [],
    }
  },
  computed: {
      salaryScore() {
        return calculate.salaryScore(this.salaryValue, this.ageScore)
      },
      researchAchievementScore() {
        return this.researchAchievementChecked.length > 0 ? 15 : 0
      },
      totalScore() {
        const scores = [this.degreeScore, this.workExperienceScore, this.salaryScore, this.ageScore, this.researchAchievementScore]
        return calculate.totalScore(scores);
      }
  }
}
</script>