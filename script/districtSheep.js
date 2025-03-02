/* eslint-disable indent */
/* eslint-disable template-curly-spacing */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const str = require('./str.js')

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

const result = data.length
const gospel = data.filter((item) => item.meetingStatus === '福音朋友')

const finalStr = `
${new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })}
一區邀約名單：
${data.filter((item) => item.district === '一區').map((item) => `${item.name}：${item.inviteList}`).join('\n')}
-
二區邀約名單：
${data.filter((item) => item.district === '二區').map((item) => `${item.name}：${item.inviteList}`).join('\n')}
-
三區邀約名單：
${data.filter((item) => item.district === '三區').map((item) => `${item.name}：${item.inviteList}`).join('\n')}
-
四區邀約名單：
${data.filter((item) => item.district === '四區').map((item) => `${item.name}：${item.inviteList}`).join('\n')}
`

// eslint-disable-next-line no-console
console.log(finalStr)

// console.log(data)

// 各區報名情形：
// 一區：${data.filter((item) => item.district === '一區').length}位
// 二區：${data.filter((item) => item.district === '二區').length}位
// 三區：${data.filter((item) => item.district === '三區').length}位
// 四區：${data.filter((item) => item.district === '四區').length}位
// 專項報名情形：
// 青職：${data.filter((item) => item.ageRange === '青職').length} 位 / 會所目標：28
// 大專：${data.filter((item) => item.ageRange === '大專').length} 位
// 青少年：${data.filter((item) => item.ageRange === '青少年').length} 位
// 其他：${data.filter((item) => item.ageRange === '其他').length} 位
