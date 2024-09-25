import { Request, Response } from 'express'
import { StatusCodes } from '../enums'
import config from '../config'

export const DevController = {

  // ** 
  get: (req: Request, res: Response) => {
    console.log(config.environment)
    res.status(StatusCodes.OK).json( {
      msg: 'DevController_GET',
      envPort: config.environment
    } )
  }

}