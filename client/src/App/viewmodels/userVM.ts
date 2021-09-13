export interface User {
  token: string;
  firstName: string;
  region: string;
}

export interface UserForm {
  email: string;
  password: string;
  userName?: string;
  confirmPassword?: string;
  region?: string;
  firstName?: string;
  lastName?: string;
}
