import {
  RegisterController,
  UserRegisterController,
  LoginController,
  LogoutController,
  RefreshTokenController,
  SendOTPController,
  bindOTPEmailController
} from './Auth'

export const AuthController = {
  register: RegisterController,
  /*
    * User Register
  */
  userRegister: UserRegisterController,
  login: LoginController,
  logout: LogoutController,
  refreshToken: RefreshTokenController,
  /*
    * Send OTP
  */  
  sendOTP: SendOTPController,
  /*
    * Bind OTP Email
  */
  bindOTPEmail: bindOTPEmailController
}
