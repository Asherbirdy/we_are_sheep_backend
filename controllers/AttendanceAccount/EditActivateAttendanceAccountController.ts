import { StatusCodes } from '../../enums'
import { BadRequestError } from '../../errors'
import { AttendanceAccount } from '../../models/AttendanceAccount'
import { Req, Res } from '../../types'

export const EditActivateAttendanceAccountController = async (req: Req, res: Res) => {

  const { 
    id,
    name, 
    serialNumber,
    serialNumberExpiredDate,
    lineProfileId,
    active
  } = req.body
  
  if (!name || !serialNumber || !serialNumberExpiredDate || !lineProfileId) {
    throw new BadRequestError('Please provide all fields')
  }

  const attendanceAccount = await AttendanceAccount.findByIdAndUpdate(id, 
    {
      name, 
      serialNumber, 
      serialNumberExpiredDate, 
      lineProfileId, 
      active
    },
    {
      new: true,
      runValidators: true
    }
  )
  
  res.status(StatusCodes.OK).json({
    msg: 'Edit activate attendance account',
    data: attendanceAccount
  })
}