export class User {
    public id: number=null;
    public first_name: string="";
    public last_name: string="";
    public email: string="";
    public password: string="";
    public confirm_passsword: string="";
    public street: string="";
    public unit: string="";
    public city: string="";
    public state: string="";
    public lucky: boolean;
    public created_at: Date= new Date();

}
