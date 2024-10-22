import {
  RegisterController,
  UserRegisterController,
  LoginController,
  LogoutController,
  RefreshTokenController,
  SendOTPController,
  bindOTPEmailController,
  ForgetPasswordEmailOTPController,
  CheckChangePasswordOTPisValidController,
  ChangePasswordWithOTPController
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
  bindOTPEmail: bindOTPEmailController,
  /*
    * Forget Password Email OTP
  */
  forgetPasswordEmailOTP: ForgetPasswordEmailOTPController,
  /*
    * Check Change Password OTP is Valid
  */
  checkChangePasswordOTPisValid: CheckChangePasswordOTPisValidController,
  /*
    * Change Password With OTP
  */
  changePasswordWithOTP: ChangePasswordWithOTPController
}
