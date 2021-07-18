<template>
<el-container>
  <el-header>
    <span>{{ $t("visa.name") }}</span>
    <lang-change />
  </el-header>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.name") }}</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          {{ $t("option.name") }}
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ $t("score.name") }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <visa-select item-name="degree" :items="degree" @set-score="setItemScore" />
    <visa-select item-label="work_experience" item-name="workExperience" :items="workExperience" @set-score="setItemScore" />
    <visa-select item-label="annual_salary" item-name="salary" :items="salary" @set-score="salaryScoreCalculate" />
    <visa-select item-name="age" :items="age" @set-score="setItemScore($event), salaryScoreCalculate($event)" />
    <visa-checkbox-group item-label="research_achievement" item-name="researchAchievement" :items="researchAchievement" @set-score="researchAchievementScoreCalculate" />
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.qualification") }}</div></el-col>
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
    <visa-checkbox-group item-label="special_plus" item-name="specialPlus" :items="specialPlus" @set-score="specialPlusScoreCalculate" />
    <visa-checkbox item-label="special_plus_research" item-name="specialPlusResearch" :item="specialPlusResearch" @set-score="specialPlusResearchScoreCalculate" />
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.foreign_qualification") }}</div></el-col>
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
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.japan_college") }}</div></el-col>
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
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.japanese_level") }}</div></el-col>
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
    <visa-checkbox-group item-label="top_college" item-name="topCollege" :items="topCollege" @set-score="topCollegeCalculate" />
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.jica") }}</div></el-col>
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
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("score.total") }}</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple text-align-left"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"><span :class="totalScoreColor">{{ totalScore }}</span></div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

  </el-main>
</el-container>

</template>

<script>
import calculate from '../assets/js/calculate.js'
import setting from '../assets/js/setting.js'
import LangChange from './common/LangChange'
import VisaSelect from './score/VisaSelect'
import VisaCheckbox from './score/VisaCheckbox'
import VisaCheckboxGroup from './score/VisaCheckboxGroup'
export default {
  components: {
    LangChange,
    VisaSelect,
    VisaCheckbox,
    VisaCheckboxGroup,
  },
  data() {
    return {
      degree: setting.options.degree,
      workExperience: setting.options.workExperience,
      salary: setting.options.salary,
      age: setting.options.age,
      researchAchievement: setting.options.researchAchievement,
      qualifications: setting.options.qualifications,
      specialPlus: setting.options.specialPlus,
      specialPlusResearch: setting.options.specialPlusResearch,
      specialPlusResearchChecked: false,
      foreignQualification: setting.options.foreignQualification,
      foreignQualificationChecked: false,
      japanCollege: setting.options.japanCollege,
      japanCollegeChecked: false,
      japaneseLevel: setting.options.japaneseLevel,
      japaneseLevelChecked: [],
      topCollege: setting.options.topCollege,
      jica: setting.options.jica,
      jicaChecked: false,
    }
  },
  computed: {
      qualificationsScore: {
        get: function() {
          return this.$store.state.scores.qualifications
        },
        set: function(value) {
          this.$store.dispatch('setScore', {key:'qualifications', score:value})
        },
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
    setItemScore(item) {
      this.$store.dispatch('setScore', {key: item.key, score:item.value})
    },
    salaryScoreCalculate(item) {
      if (item.key === 'salary') {
        this.$store.dispatch('setSelectedOption', {key:'salary', value: item.value})
      }
      this.$store.dispatch('setScore', {key:'salary', score:calculate.salaryScore(this.$store.state.selectedOption.salary, this.$store.state.scores.age)})
    },
    researchAchievementScoreCalculate(item) {
      this.$store.dispatch('setScore', {key:'researchAchievement', score:calculate.researchAchievementScore(item.value)})
    },
    specialPlusScoreCalculate(item) {
      this.$store.dispatch('setScore', {key:'specialPlus', score:calculate.specialPlusScore(item.value)})
    },
    specialPlusResearchScoreCalculate(item) {
      this.$store.dispatch('setScore', {key:'specialPlusResearch', score:item.value ? 5 : 0})
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
    topCollegeCalculate(item) {
      this.$store.dispatch('setScore', {key:'topCollege', score:item.value.length > 0 ? 10 : 0})
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

::v-deep(.el-checkbox__label) {
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