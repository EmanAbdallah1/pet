import{ResourceTypeDto } from './ResourceTypeDto'
export class ResourceDto
{
    public id: number=0;
    public nameEn: string="";
    public nameAr: string="";
    public number?:string;
    public resourceTypeId:number=0;
    public hireDate?:Date;
    public creationTime?:Date;
    public isActive:Boolean=true;
    public resourceTypeNameEn?: string;
    public resourceTypeNameAr?: string;
    public resourceType?: ResourceTypeDto;
}