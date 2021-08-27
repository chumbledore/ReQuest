export interface User {
  token: string;
  firstName: string;
  region: string;
}

export interface UserForm {
  email: string;
  password: string;
  region?: string;
  firstName?: string;
  lastName?: string;
}
