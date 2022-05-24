import { CountryDto } from "./CountryDto";

export class CityDto {
   public id: number=0;
   public nameEn: string="";
   public nameAr: string="";
   public isActive: boolean=false;
   public countryId?: number;
   public countryNameEn?: string;
   public countryNameAr?: string;
   public country?: CountryDto;
}