export class User {
    public get password(): string {
      return this._password;
    }
    public set password(value: string) {
      this._password = value;
    }
    public get email(): string {
      return this._email;
    }
    public set email(value: string) {
      this._email = value;
    }
    public get username(): string {
      return this._username;
    }
    public set username(value: string) {
      this._username = value;
    }
    
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
    constructor(
        public _id: number = 0,
        public _username: string = '',
        public _email: string = '',
        public _password: string = ''
      ){}
      

}
