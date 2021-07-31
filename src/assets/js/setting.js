import CONSTANT from './constant'

export default {
    options: {
        degree: [{
            value: CONSTANT.OPTIONS.DEGREE.BACHELOR,
            label: 'option.degree.bachelor'
          }, {
            value: CONSTANT.OPTIONS.DEGREE.MASTER,
            label: 'option.degree.master'
          }, {
            value: CONSTANT.OPTIONS.DEGREE.DOCTOR,
            label: 'option.degree.doctor'
          }, {
            value: CONSTANT.OPTIONS.DEFAULT,
            label: 'option.degree.default'
          }
        ],
        workExperience: [{
            value: CONSTANT.OPTIONS.WORK_EXPERIENCE.ABOVE_TEN,
            label: 'option.work_experience.above_ten'
          }, {
            value: CONSTANT.OPTIONS.WORK_EXPERIENCE.SEVEN_TO_TEN,
            label: 'option.work_experience.seven_to_ten'
          }, {
            value: CONSTANT.OPTIONS.WORK_EXPERIENCE.FIVE_TO_SEVEN,
            label: 'option.work_experience.five_to_seven'
          }, {
            value: CONSTANT.OPTIONS.WORK_EXPERIENCE.THREE_TO_FIVE,
            label: 'option.work_experience.three_to_five'
          }, {
            value: CONSTANT.OPTIONS.DEFAULT,
            label: 'option.work_experience.default'
          }
        ],
        salary: [{
            value: CONSTANT.OPTIONS.SALARY.FOUR_TO_FIVE_MILLION,
            label: 'option.salary.four_to_five'
          }, {
            value: CONSTANT.OPTIONS.SALARY.FIVE_TO_SIX_MILLION,
            label: 'option.salary.five_to_six'
          }, {
            value: CONSTANT.OPTIONS.SALARY.SIX_TO_SEVEN_MILLION,
            label: 'option.salary.six_to_seven'
          }, {
            value: CONSTANT.OPTIONS.SALARY.SEVEN_TO_EIGHT_MILLION,
            label: 'option.salary.seven_to_eight'
          }, {
            value: CONSTANT.OPTIONS.SALARY.EIGHT_TO_NIGHT_MILLION,
            label: 'option.salary.eight_to_nine'
          }, {
            value: CONSTANT.OPTIONS.SALARY.NINE_TO_TEN_MILLION,
            label: 'option.salary.nine_to_ten'
          }, {
            value: CONSTANT.OPTIONS.SALARY.ABOVE_TEN_MILLION,
            label: 'option.salary.above_ten'
          }, {
            value: CONSTANT.OPTIONS.DEFAULT,
            label: 'option.salary.default'
          }
        ],
        age: [{
            value: CONSTANT.OPTIONS.AGE.ABOVE_THIRTY_NINE,
            label: 'option.age.above_thirty_nine'
          }, {
            value: CONSTANT.OPTIONS.AGE.THIRTY_FIVE_TO_THIRTY_NINE,
            label: 'option.age.thirty_five_to_thirty_nine'
          }, {
            value: CONSTANT.OPTIONS.AGE.THIRTY_TO_THIRTY_FOUR,
            label: 'option.age.thirty_to_thirty_four'
          }, {
            value: CONSTANT.OPTIONS.AGE.BELOW_THIRTY,
            label: 'option.age.below_thirty'
          }, {
            value: CONSTANT.OPTIONS.DEFAULT,
            label: 'option.age.default'
          }
        ],
        researchAchievement:[
          {
            key:1,
            text: 'option.research_achievement.rule_1'
          },
          {
            key:2,
            text: 'option.research_achievement.rule_2'
          },
          {
            key:3,
            text: 'option.research_achievement.rule_3'
          },
          {
            key:4,
            text: 'option.research_achievement.rule_4'
          },
        ],
        qualifications:[
          {
            value:0,
            text: 'option.qualifications.none'
          },
          {
            value:5,
            text: 'option.qualifications.single'
          },
          {
            value:10,
            text: 'option.qualifications.multiple'
          },
        ],
        specialPlus:[
          {
            key:1,
            value:10,
            text: 'option.special_plus.rule_1',
          },
          {
            key:2,
            value:10,
            text: 'option.special_plus.rule_2',
          },
          {
            key:3,
            value:10,
            text: 'option.special_plus.rule_3',
          },
        ],
        specialPlusResearch:{
            value:5,
            text: 'option.special_plus_research.rule',
        },
        foreignQualification:{
            value:5,
            text: 'option.foreign_qualification.rule',
        },
        japanCollege:{
          value:10,
          text: 'option.japan_college.rule',
        },
        japaneseLevel: [
          {
            key:1,
            value:15,
            text: 'option.japanese_level.n1'
          },
          {
            key:2,
            value:10,
            text: 'option.japanese_level.n2'
          },
        ],
        topCollege:[
          {
            key:1,
            value:10,
            text:'option.top_college.rule_1'
          },
          {
            key:2,
            value:10,
            text:'option.top_college.rule_2'
          },
          {
            key:3,
            value:10,
            text:'option.top_college.rule_3'
          },
        ],
        jica:{
          value:5,
          text: 'option.jica.rule',
        },
    },
}