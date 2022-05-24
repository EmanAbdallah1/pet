export class DealerDto {
    public id:number=0;
    public name:string="";  
    public vatNumber?:string; 
    public licenseNumber?: string;
    public emailAddress?: string;
    public collectionLimit?:number;
    public phone?: string;
    public ownerIdentityNumber?:string;
    public electronicNumber?: string;
    public cityId?: number;
    public note?: string;
    public isActive:boolean=true;
    public erpCode?:string;  
}