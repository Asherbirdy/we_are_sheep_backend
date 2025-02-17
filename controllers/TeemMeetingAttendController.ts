import { Request, Response } from 'express'
import { StatusCodes } from '../enums'
import { TeemMeetingAttend } from '../models/TeemMeetingAttend'
import { Req, Res } from '../types'

export const TeemMeetingAttendController = {
  create: async (req: Req, res: Res) => {
    const { excelString } = req.body
    res.status(StatusCodes.CREATED).json({
      message: 'TeemMeetingAttend created successfully'
    })
  },
  get: async (req: Req, res: Res) => {
    const { district, name, ageRange, gender, meetingStatus, sheepherd, inviteList } = req.body
    res.status(StatusCodes.OK).json({
      message: 'TeemMeetingAttend created successfully'
    })
  }
}

