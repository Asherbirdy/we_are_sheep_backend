/* eslint-disable indent */
/* eslint-disable no-undef */
const str = `
一區	彭林美珍	其他	女	已有聚會	只參加3/30主日	無	無
一區	吳佳純	其他	女	已有聚會	未選擇	無	無
一區	謝昇津	其他	女	已有聚會	兩天都參加	無	無
一區	許偉如	其他	男	已有聚會	兩天都參加	無	無
二區	張承恩	青職	男	已有聚會	兩天都參加	無	無
二區	張黃美君	青職	女	已有聚會	兩天都參加	無	無
二區	曾珮誼	其他	女	已有聚會	只參加3/29特會	無	無
三區	許家銘	青職	男	已有聚會	只參加3/29特會	無	無
三區	林照銓	青職	男	福音朋友	只參加3/29特會	許家銘	
三區	潘仰恩	青職	男	已有聚會	兩天都參加	無	無
三區	巫欣倫	青職	女	已有聚會	兩天都參加	無	廖語萱、林建澄、陳捷方、古意文、陳允辰
三區	方品元	青職	女	已有聚會	兩天都參加	無	無
三區	郭嘉茵	青職	女	已有聚會	兩天都參加	無	無
三區	吳英翰	大專	男	已有聚會	兩天都參加	無	無
三區	莊冠霖	大專	男	已有聚會	兩天都參加	無	無
三區	沈張紓	其他	女	已有聚會	兩天都參加	無	無
三區	林顏淑惠	其他	女	已有聚會	兩天都參加	無	林彥仲、林家旭、鞠昊恩、顏岑芳
三區	黃珍琦	其他	女	已有聚會	兩天都參加	無	謝宇宸、林奕萱、林奕晴
三區	徐以涵	其他	女	已有聚會	兩天都參加	無	無
三區	沈建中	其他	男	已有聚會	兩天都參加	無	無
四區	連亞設	青職	男	已有聚會	兩天都參加	無	周暐洺、郭晉、斯斯
四區	周暐洺	青職	男	福音朋友	只參加3/29特會	連亞設	無
四區	葉人溢	其他	男	已有聚會	兩天都參加	無	林至謙、林奕辰、陳昱翰
四區	陳筠汝	其他	女	已有聚會	兩天都參加	無	周晨曄、許皓瑋
四區	王海容	其他	男	已有聚會	兩天都參加	無	無
四區	翁智泓	其他	男	已有聚會	兩天都參加	無	無
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

