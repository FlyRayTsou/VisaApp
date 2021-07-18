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
    <visa-select item-name="degree" :items="options.degree" @set-score="setItemScore" />
    <visa-select item-label="work_experience" item-name="workExperience" :items="options.workExperience" @set-score="setItemScore" />
    <visa-select item-label="annual_salary" item-name="salary" :items="options.salary" @set-score="salaryScoreCalculate" />
    <visa-select item-name="age" :items="options.age" @set-score="setItemScore($event), salaryScoreCalculate($event)" />
    <visa-checkbox-group item-label="research_achievement" item-name="researchAchievement" :items="options.researchAchievement" @set-score="researchAchievementScoreCalculate" />
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">{{ $t("item.qualification") }}</div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple text-align-left">
          <el-radio-group v-model="qualificationsScore">
            <el-radio v-for="item in options.qualifications" :key="item.value" :label="item.value">{{ item.text }}</el-radio>
          </el-radio-group>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">{{ qualificationsScore }}</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <visa-checkbox-group item-label="special_plus" item-name="specialPlus" :items="options.specialPlus" @set-score="specialPlusScoreCalculate" />
    <visa-checkbox item-label="special_plus_research" item-name="specialPlusResearch" :item="options.specialPlusResearch" @set-score="specialPlusResearchScoreCalculate" />
    <visa-checkbox item-label="foreign_qualification" item-name="foreignQualification" :item="options.foreignQualification" @set-score="foreignQualificationCalculate" />
    <visa-checkbox item-label="japan_college" item-name="japanCollege" :item="options.japanCollege" @set-score="japanCollegeCalculate($event), japaneseLevelCalculate($event)" />
    <visa-checkbox-group item-label="japanese_level" item-name="japaneseLevel" :items="options.japaneseLevel" @set-score="japaneseLevelCalculate" />
    <visa-checkbox-group item-label="top_college" item-name="topCollege" :items="options.topCollege" @set-score="topCollegeCalculate" />
    <visa-checkbox item-name="jica" :item="options.jica" @set-score="jicaCalculate" />
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
      options: setting.options,
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
    foreignQualificationCalculate(item) {
      this.$store.dispatch('setScore', {key:'foreignQualification', score:item.value ? 10 : 0})
    },
    japanCollegeCalculate(item) {
      this.$store.dispatch('setScore', {key:'japanCollege', score:item.value ? 10 : 0})
    },
    japaneseLevelCalculate(item) {
      if (item.key === 'japaneseLevel') {
        this.$store.dispatch('setSelectedOption', {key:'japaneseLevel', value: item.value})
      }
      this.$store.dispatch('setScore', {key:'japaneseLevel', score:calculate.japaneseLevelScore(this.$store.state.selectedOption.japaneseLevel, this.$store.state.scores.japanCollege)})
    },
    topCollegeCalculate(item) {
      this.$store.dispatch('setScore', {key:'topCollege', score:item.value.length > 0 ? 10 : 0})
    },
    jicaCalculate(item) {
      this.$store.dispatch('setScore', {key:'jica', score:item.value ? 5 : 0})
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