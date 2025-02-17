/* eslint-disable no-undef */
const str = `
一區	測試一	青職	男	已有聚會	兩天都參加	無	陳小美、王小明、王大天、陳東東、王西西
一區	測試二	大專	男	已有聚會	兩天都參加	無	無
二區	測試三	青少年	男	福音朋友	只參加3/29特會	無	無
二區	測試四	青職	女	已有聚會	只參加3/30主日	無	陳小美、王小明、王大天、陳東東、王西西
三區	測試五	青少年	男	已有聚會	兩天都參加	無	無
四區	測試六	其他	女	已有聚會	兩天都參加	無	無
`

const data = str.trim().split('\n').map((line) => {
  const [district, name, ageRange, gender, meetingStatus, participation, sheepherd, inviteList] = line.split('\t')
  return {
    district,
    name,
    ageRange,
    gender,
    meetingStatus,
    participation,
    sheepherd,
    inviteList: inviteList || '無'
  }
})

// eslint-disable-next-line no-console
console.log(JSON.stringify(data))

