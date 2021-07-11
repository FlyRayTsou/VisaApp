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
            value: 0,
            label: 'option.age.above_thirty_nine'
          }, {
            value: 5,
            label: 'option.age.thirty_five_to_thirty_nine'
          }, {
            value: 10,
            label: 'option.age.thirty_to_thirty_four'
          }, {
            value: 15,
            label: 'option.age.below_thirty'
          }, {
            value: -1,
            label: 'option.age.default'
          }
        ],
        researchAchievement:[
          {
            key:1,
            text:'発明者として特許を受けた発明が１件以上'  
          },
          {
            key:2,
            text:'外国政府から補助金，競争的資金等を受けた研究に３回以上従事'
          },
          {
            key:3,
            text:'学術論文データベースに登載されている学術雑誌に掲載された論文が３本以上※責任著者であるものに限る'
          },
          {
            key:4,
            text:'その他法務大臣が認める研究実績'
          },
        ],
        qualifications:[
          {
            value:0,
            text:'なし'  
          },
          {
            value:5,
            text:'１つ保有'  
          },
          {
            value:10,
            text:'複数保有'
          },
        ],
        specialPlus:[
          {
            key:1,
            value:10,
            text:'Ⅰ　イノベーション促進支援措置を受けている'  
          },
          {
            key:2,
            value:10,
            text:'Ⅱ　Ⅰに該当する企業であって，中小企業基本法に規定する中小企業者'
          },
          {
            key:3,
            value:10,
            text:'Ⅲ　国家戦略特別区域高度人材外国人受入促進事業の対象企業として支援を受けている'
          },
        ],
        specialPlusResearch:{
            value:5,
            text:'契約機関が中小企業基本法に規定する中小企業者で，試験研究費及び開発費の合計金額が，総収入金額から固定資産若しくは有価証券の譲渡による収入金額を控除した金額（売上高）の３％超'  
        },
        foreignQualification:{
            value:5,
            text:'従事しようとする業務に関連する外国の資格，表彰等で法務大臣が認めるものを保有'  
        },
        japanCollege:{
          value:10,
          text:'日本の大学を卒業又は大学院の課程を修了'  
        },
        japaneseLevel: [
          {
            key:1,
            value:15,
            text:'日本語専攻で外国の大学を卒業又は日本語能力試験Ｎ１合格相当'  
          },
          {
            key:2,
            value:10,
            text:'日本語能力試験Ｎ２合格相当'
          },
        ],
        topCollege:[
          {
            key:1,
            value:10,
            text:'Ⅰ　以下のランキング２つ以上において３００位以内の外国の大学又はいずれかにランクづけされている本邦の大学'  
          },
          {
            key:2,
            value:10,
            text:'Ⅱ　文部科学省が実施するスーパーグローバル大学創成支援事業（トップ型及びグローバル化牽引型）において，補助金の交付を受けている大学'
          },
          {
            key:3,
            value:10,
            text:'Ⅲ　外務省が実施するイノベーティブ・アジア事業において，「パートナー校」として指定を受けている大学'
          },
        ],
        jica:{
          value:5,
          text:'外務省が実施するイノベーティブ・アジア事業の一環としてＪＩＣＡが実施する研修を修了したこと'  
        },
    },
}