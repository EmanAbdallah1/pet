import { GenderDto } from "./GenderDto";

export class SalutationDto {
    public id: number = 0;
    public nameEn: string="";
    public nameAr: string="";
    public genderId?: number;
    public isActive: boolean = false;
    public gender?: GenderDto;
}