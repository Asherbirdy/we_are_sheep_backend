/* eslint-disable indent */
/* eslint-disable no-undef */
const str = `
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

