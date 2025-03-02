/* eslint-disable template-curly-spacing */
/* eslint-disable no-undef */
const str = `
一區	彭林美珍	其他	女	已有聚會	只參加3/30主日	無	無
一區	許謝昇津	其他	女	已有聚會	兩天都參加	無	無
一區	許偉如	其他	男	已有聚會	兩天都參加	無	無
一區	賴志勝	其他	男	已有聚會	兩天都參加	無	無
一區	賴張秋月	其他	女	已有聚會	兩天都參加	無	無
二區	張承恩	青職	男	已有聚會	兩天都參加	無	無
二區	張黃美君	青職	女	已有聚會	兩天都參加	無	無
二區	曾珮誼	其他	女	已有聚會	只參加3/29特會	無	無
二區	彭吳佳純	其他	女	已有聚會	未選擇	無	無
三區	許家銘	青職	男	已有聚會	只參加3/29特會	無	無
三區	林照銓	青職	男	福音朋友	只參加3/29特會	許家銘	無
三區	潘仰恩	青職	男	已有聚會	兩天都參加	無	無
三區	巫欣倫	青職	女	已有聚會	兩天都參加	無	廖語萱、林建澄、陳捷方、古意文、陳允辰
三區	方品元	青職	女	已有聚會	兩天都參加	無	無
三區	郭嘉茵	青職	女	已有聚會	兩天都參加	無	無
三區	吳英翰	大專	男	已有聚會	兩天都參加	無	無
三區	莊冠霖	大專	男	已有聚會	兩天都參加	無	無
三區	許維恩	青少年	男	已有聚會	未選擇	無	無
三區	陳品翔	青少年	男	已有聚會	未選擇	無	無
三區	沈張紓	其他	女	已有聚會	兩天都參加	無	無
三區	林顏淑惠	其他	女	已有聚會	兩天都參加	無	林彥仲、林家旭、鞠昊恩、顏岑芳
三區	黃珍琦	其他	女	已有聚會	兩天都參加	無	謝宇宸、林奕萱、林奕晴
三區	徐以涵	其他	女	已有聚會	兩天都參加	無	無
三區	沈建中	其他	男	已有聚會	兩天都參加	無	無
四區	連亞設	青職	男	已有聚會	兩天都參加	無	周暐洺、郭晉、斯泓菖、林哲輝
四區	周暐洺	青職	男	福音朋友	只參加3/29特會	連亞設	無
四區	陳柏瑞	青職	男	已有聚會	未選擇	無	無
四區	林經綸	青職	男	已有聚會	兩天都參加	無	無
四區	葉人溢	其他	男	已有聚會	兩天都參加	無	林至謙、林奕辰、陳昱翰
四區	陳筠汝	其他	女	已有聚會	兩天都參加	無	周晨曄、許皓瑋
四區	王海容	其他	男	已有聚會	兩天都參加	無	無
四區	翁智泓	其他	男	已有聚會	兩天都參加	無	無
二區	莊雅雯	其他	女	已有聚會	未選擇	無	無	
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
