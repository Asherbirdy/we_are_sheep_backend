import { Request, Response } from 'express'
import { StatusCodes } from '../enums'
import { TeemMeetingAttend ,AgeRange} from '../models/TeemMeetingAttend'
import { Req, Res } from '../types'
import { UnauthenticatedError } from '../errors/unauthenticated'
export const TeemMeetingAttendController = {
  create: async (req: Req, res: Res) => {
    const { data } = req.body

    const deletedRecords = await TeemMeetingAttend.deleteMany({})
    const createdRecords = await Promise.all(data.map(async (item: any) => {
      // 假設 TeemMeetingAttend 是一個資料庫模型
      return await TeemMeetingAttend.create(item)
    }))
    res.status(StatusCodes.CREATED).json({
      msg: 'TeemMeetingAttend created successfully',
      total: createdRecords.length,
      data: createdRecords,
      deletedRecords: deletedRecords?.deletedCount
    })
  },
  get: async (req: Req, res: Res) => {
    const { password } = req.body
    if (password !== '0329') {
      throw new UnauthenticatedError('WRONG_PASSWORD')
    }
    const data = await TeemMeetingAttend.find({})

    const ageRangeData = {
      nonSelected: {
        count: data.filter((item: any) => item.ageRange === AgeRange.none).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.none),
      },
      teenager: {
        count: data.filter((item: any) => item.ageRange === AgeRange.teenager).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.teenager),
      },
      college: {
        count: data.filter((item: any) => item.ageRange === AgeRange.college).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.college),
      },
      youth: {
        count: data.filter((item: any) => item.ageRange === AgeRange.youth).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.youth),
      },
      child1: {
        count: data.filter((item: any) => item.ageRange === AgeRange.child1).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.child1),
      },
      child2: {
        count: data.filter((item: any) => item.ageRange === AgeRange.child2).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.child2),
      },
      child3: {
        count: data.filter((item: any) => item.ageRange === AgeRange.child3).length,
        data: data.filter((item: any) => item.ageRange === AgeRange.child3),
      }
    }
    res.status(StatusCodes.OK).json({
      message: 'TeemMeetingAttend created successfully',
      data: {
        ageRange: ageRangeData,
      }
    })
  }
}

