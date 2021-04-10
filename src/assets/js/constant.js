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
        }],
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
        }],
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
        ]
    },
}