export default {
    options: {
        degree: [{
            value: 10,
            label: 'Bachelor'
          }, {
            value: 20,
            label: 'Master'
          }, {
            value: 30,
            label: 'Doctor'
          }, {
            value: 0,
            label: 'Choose Degree'
          }
        ],
        workExperience: [{
            value: 20,
            label: 'above 10years'
          }, {
            value: 15,
            label: '7 ~ 10 years'
          }, {
            value: 10,
            label: '5 ~ 7 years'
          }, {
            value: 5,
            label: '3 ~ 5 years'
          }, {
            value: 0,
            label: 'Choose Work Years'
          }
        ],
        salary: [{
            value: 1,
            label: '400~500'
          }, {
            value: 2,
            label: '500~600'
          }, {
            value: 3,
            label: '600~700'
          }, {
            value: 4,
            label: '700~800'
          }, {
            value: 5,
            label: '800~900'
          }, {
            value: 6,
            label: '900~1000'
          }, {
            value: 7,
            label: 'above 1000'
          }
        ],
        age: [{
            value: 0,
            label: '>39'
          }, {
            value: 5,
            label: '35~39'
          }, {
            value: 10,
            label: '30~34'
          }, {
            value: 15,
            label: '<30'
        }],
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
    },
}