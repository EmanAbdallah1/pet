import { CityDto } from "./CityDto";

export class DistrictDto {
    public id: number=0;
    public nameEn: string="";
    public nameAr: string="";
    public isActive: boolean=false;
    public cityId?: number;
    public countryId?:number;
    public cityNameEn?: string;
    public cityNameAr?: string;
    public city?: CityDto;
    public countryNameEn?: string;
    public countryNameAr?: string;
}