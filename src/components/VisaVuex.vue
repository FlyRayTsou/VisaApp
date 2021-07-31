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
    <visa-checkbox-group item-label="research_achievement" item-name="researchAchievement" :items="options.researchAchievement" @set-score="setItemScore" />
    <visa-radio-group item-name="qualification" :items="options.qualifications" @set-score="setItemScore" />
    <visa-checkbox-group item-label="special_plus" item-name="specialPlus" :items="options.specialPlus" @set-score="setItemScore" />
    <visa-checkbox item-label="special_plus_research" item-name="specialPlusResearch" :item="options.specialPlusResearch" @set-score="setItemScore" />
    <visa-checkbox item-label="foreign_qualification" item-name="foreignQualification" :item="options.foreignQualification" @set-score="setItemScore" />
    <visa-checkbox item-label="japan_college" item-name="japanCollege" :item="options.japanCollege" @set-score="setItemScore($event), japaneseLevelCalculate($event)" />
    <visa-checkbox-group item-label="japanese_level" item-name="japaneseLevel" :items="options.japaneseLevel" @set-score="japaneseLevelCalculate" />
    <visa-checkbox-group item-label="top_college" item-name="topCollege" :items="options.topCollege" @set-score="setItemScore" />
    <visa-checkbox item-name="jica" :item="options.jica" @set-score="setItemScore" />
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
import VisaRadioGroup from './score/VisaRadioGroup'
import VisaCheckbox from './score/VisaCheckbox'
import VisaCheckboxGroup from './score/VisaCheckboxGroup'
export default {
  components: {
    LangChange,
    VisaSelect,
    VisaRadioGroup,
    VisaCheckbox,
    VisaCheckboxGroup,
  },
  data() {
    return {
      options: setting.options,
    }
  },
  computed: {
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
      let scoreValue = item.value
      switch(item.key) {
        case 'researchAchievement':
          scoreValue = calculate.researchAchievementScore(item.value)
          break
        case 'specialPlus':
          scoreValue = calculate.specialPlusScore(item.value)
          break
        case 'specialPlusResearch':
          scoreValue = calculate.specialPlusResearchScore(item.value)
          break
        case 'foreignQualification':
          scoreValue = calculate.foreignQualificationScore(item.value)
          break
        case 'japanCollege':
          scoreValue = calculate.japanCollegeScore(item.value)
          break
        case 'topCollege':
          scoreValue = calculate.topCollegeScore(item.value)
          break
        case 'jica':
          scoreValue = calculate.jicaScore(item.value)
          break
      }
      this.$store.dispatch('setScore', {key: item.key, score:scoreValue})  
    },
    salaryScoreCalculate(item) {
      if (item.key === 'salary') {
        this.$store.dispatch('setSelectedOption', {key:'salary', value: item.value})
      }
      this.$store.dispatch('setScore', {key:'salary', score:calculate.salaryScore(this.$store.state.selectedOption.salary, this.$store.state.scores.age)})
    },
    japaneseLevelCalculate(item) {
      if (item.key === 'japaneseLevel') {
        this.$store.dispatch('setSelectedOption', {key:'japaneseLevel', value: item.value})
      }
      this.$store.dispatch('setScore', {key:'japaneseLevel', score:calculate.japaneseLevelScore(this.$store.state.selectedOption.japaneseLevel, this.$store.state.scores.japanCollege)})
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