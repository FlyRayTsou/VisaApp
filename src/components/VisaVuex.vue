<template>
<el-container>
  <el-header>{{ $t("visa.name") }}<p></p></el-header>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Item</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          Options
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">Scores</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Degree</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
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
      <el-col :span="2"><div class="grid-content bg-purple">{{ degreeScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">workExperience</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
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
      <el-col :span="2"><div class="grid-content bg-purple">{{ workExperienceScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple ">Salary</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
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
      <el-col :span="2"><div class="grid-content bg-purple">{{ salaryScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Age</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
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
      <el-col :span="2"><div class="grid-content bg-purple">{{ ageScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Research Achievement</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-checkbox-group v-model="researchAchievementChecked" class="text-align-left" @change="researchAchievementScoreCalculate">
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
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Qualifications</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-radio-group v-model="qualificationsScore">
            <el-radio v-for="item in qualifications" :key="item.value" :label="item.value">{{ item.text }}</el-radio>
          </el-radio-group>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ qualificationsScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Special Plus</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-checkbox-group v-model="specialPlusChecked" class="text-align-left" @change="specialPlusScoreCalculate">
            <el-checkbox
              v-for="item in specialPlus"
              :key="item.key"
              :label="item.key">
              {{ item.text }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ specialPlusScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Special Plus Research</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-checkbox v-model="specialPlusResearchChecked" @change="specialPlusResearchScoreCalculate">{{ specialPlusResearch.text }}</el-checkbox>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ specialPlusResearchScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Foreign Qualification</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-checkbox v-model="foreignQualificationChecked" @change="foreignQualificationCalculate">{{ foreignQualification.text }}</el-checkbox>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ foreignQualificationScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Japan College</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-checkbox v-model="japanCollegeChecked" @change="japanCollegeCalculate(); japaneseLevelCalculate();">{{ japanCollege.text }}</el-checkbox>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ japanCollegeScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Japanese Level</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-checkbox-group v-model="japaneseLevelChecked" class="text-align-left" @change="japaneseLevelCalculate">
            <el-checkbox
              v-for="item in japaneseLevel"
              :key="item.key"
              :label="item.key">
              {{ item.text }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ japaneseLevelScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Top College</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-checkbox-group v-model="topCollegeChecked" class="text-align-left" @change="topCollegeCalculate">
            <el-checkbox
              v-for="item in topCollege"
              :key="item.key"
              :label="item.key">
              {{ item.text }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ topCollegeScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">JICA</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-checkbox v-model="jicaChecked" @change="jicaCalculate">{{ jica.text }}</el-checkbox>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ jicaScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">Total Score</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple text-align-left"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"><span :class="totalScoreColor">{{ totalScore }}</span></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

  </el-main>
</el-container>

</template>

<script>
import calculate from '../assets/js/calculate.js'
import constant from '../assets/js/constant.js'
export default {
  data() {
    return {
      degree: constant.options.degree,
      workExperience: constant.options.workExperience,
      salary: constant.options.salary,
      salaryValue: null,
      age: constant.options.age,
      researchAchievement: constant.options.researchAchievement,
      researchAchievementChecked: [],
      qualifications: constant.options.qualifications,
      specialPlus: constant.options.specialPlus,
      specialPlusChecked: [],
      specialPlusResearch: constant.options.specialPlusResearch,
      specialPlusResearchChecked: false,
      foreignQualification: constant.options.foreignQualification,
      foreignQualificationChecked: false,
      japanCollege: constant.options.japanCollege,
      japanCollegeChecked: false,
      japaneseLevel: constant.options.japaneseLevel,
      japaneseLevelChecked: [],
      topCollege: constant.options.topCollege,
      topCollegeChecked: [],
      jica: constant.options.jica,
      jicaChecked: false,
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
      ageScore: {
        get: function() {
          return this.$store.state.scores.age
        },
        set: function(value) {
          this.$store.dispatch('setScore', {key:'age', score:value})
        },
      },
      researchAchievementScore() {
        return this.$store.state.scores.researchAchievement
      },
      qualificationsScore: {
        get: function() {
          return this.$store.state.scores.qualifications
        },
        set: function(value) {
          this.$store.dispatch('setScore', {key:'qualifications', score:value})
        },
      },
      specialPlusScore() {
        return this.$store.state.scores.specialPlus
      },
      specialPlusResearchScore() {
        return this.$store.state.scores.specialPlusResearch
      },
      foreignQualificationScore() {
        return this.$store.state.scores.foreignQualification
      },
      japanCollegeScore() {
        return this.$store.state.scores.japanCollege
      },
      japaneseLevelScore() {
        return this.$store.state.scores.japaneseLevel
      },
      topCollegeScore() {
        return this.$store.state.scores.topCollege
      },
      jicaScore() {
        return this.$store.state.scores.jica
      },
      totalScore() {
        return this.$store.getters.totalScores
      },
      totalScoreColor() {
        if (this.totalScore < 70) {
          return 'font-red'
        } else if (this.totalScore >= 80) {
          return 'font-blue'
        }
        return 'font-green'
      }
  },
  methods: {
    salaryScoreCalculate() {
      this.$store.dispatch('setScore', {key:'salary', score:calculate.salaryScore(this.salaryValue, this.ageScore)})
    },
    researchAchievementScoreCalculate() {
      this.$store.dispatch('setScore', {key:'researchAchievement', score:this.researchAchievementChecked.length > 0 ? 15 : 0})
    },
    specialPlusScoreCalculate() {
      this.$store.dispatch('setScore', {key:'specialPlus', score:calculate.specialPlusScore(this.specialPlusChecked)})
    },
    specialPlusResearchScoreCalculate() {
      this.$store.dispatch('setScore', {key:'specialPlusResearch', score:this.specialPlusResearchChecked ? 5 : 0})
    },
    foreignQualificationCalculate() {
      this.$store.dispatch('setScore', {key:'foreignQualification', score:this.foreignQualificationChecked ? 10 : 0})
    },
    japanCollegeCalculate() {
      this.$store.dispatch('setScore', {key:'japanCollege', score:this.japanCollegeChecked ? 10 : 0})
    },
    japaneseLevelCalculate() {
      this.$store.dispatch('setScore', {key:'japaneseLevel', score:calculate.japaneseLevelScore(this.japaneseLevelChecked, this.japanCollegeChecked)})
    },
    topCollegeCalculate() {
      this.$store.dispatch('setScore', {key:'topCollege', score:this.topCollegeChecked.length > 0 ? 10 : 0})
    },
    jicaCalculate() {
      this.$store.dispatch('setScore', {key:'jica', score:this.jicaChecked ? 5 : 0})
    },
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.text-align-left {
  text-align: left;
}

::v-deep .el-checkbox__label {
    white-space: pre-line;
    vertical-align: top;
}

.font-red {
  color: #F56C6C;
}

.font-green {
  color: #67C23A;
}

.font-blue {
  color: #409EFF;
}
</style>