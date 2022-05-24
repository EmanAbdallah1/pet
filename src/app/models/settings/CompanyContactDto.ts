import { CompanyDto } from "./CompanyDto";
import { ContactTypeDto } from "./ContactTypeDto";

export class CompanyContactDto {
    public id: number = 0;
    public nameEn: string = "";
    public nameAr: string = "";
    public isActive: boolean = false;
    public details?: string;
    public companyId?: number;
    public contactTypeId?: number;
    public companyNameEn?: string;
    public companyNameAr?: string;
    public contactTypeNameEn?: string;
    public contactTypeNameAr?: string;
    public company?: CompanyDto;
    public contactType?: ContactTypeDto;
    
}