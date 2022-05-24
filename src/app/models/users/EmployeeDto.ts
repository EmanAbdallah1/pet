export class EmployeeDto {
    public id:number=0;
    public idNumber: number=0;  
    public number:number=0; 
    public firstName: string="";
    public fatherName: string="";
    public familyName: string="";
    public dateOfBirth?: Date;
    public hireDate?: Date;
    public genderId: number=0;
    public positionId?: number;
    public salutationId?: number;
    public idTypeId: number=0;
    public jobTypeId: number=0;
    public isacces: Boolean=false;
    public userId?:string;
    
}