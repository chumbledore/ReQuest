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

export interface Errors {
  Email: string;
  Password: string;
  UserName?: string;
  ConfirmPassword?: string;
  Region?: string;
  FirstName?: string;
  LastName?: string;
}