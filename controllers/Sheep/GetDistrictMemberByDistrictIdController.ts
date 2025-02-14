import { StatusCodes } from '../../enums'
import { Sheep } from '../../models/Sheep'
import { Req, Res } from '../../types'

export const GetDistrictMemberByDistrictIdController = async (req: Req, res: Res) => {
  const { district } = req.query
  
  if (!district) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: 'District is required'
    })
    return
  }

  const sheep = await Sheep.find({ district }).select('_id name userId district userId')
  res.status(StatusCodes.OK).json({
    msg: 'Get District Member',
    data: sheep
  })
}

