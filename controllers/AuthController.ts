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
  // ** register
  register: RegisterController,
  // ** userRegister
  userRegister: UserRegisterController,
  // ** login
  login: LoginController,
  // ** logout
  logout: LogoutController,
  // ** refreshToken
  refreshToken: RefreshTokenController,
  sendOTP: SendOTPController,
  bindOTPEmail: bindOTPEmailController
}
