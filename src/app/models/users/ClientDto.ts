import { ClientCategoryDto } from "../settings/ClientCategoryDto";

export class ClientDto {
    public id:number=0;
    public firstName: string="";
    public fatherName: string="";
    public familyName: string="";
    public andAlso: string="";
    public clientCategoryId?:number;
    public clientCategoryName?:string;
    public clientCategory?:ClientCategoryDto;
    public dateOfBirth?: Date;
    public favoriteVitId?: number;
    public favoriteVitName: string="";
    public collectionLimit: number=0;
    public discountId?: number;
    public discountName: string="";
    public genderId?: number;
    public salutationId?: number;
    public salutationName: string="";
    public idTypeId?: number;
    public idTypeName?: string;
    public idNumber: string="";
    public preferredLanguageId?: number;
    public preferredLanguageName: string="";
    public perceivingMethodId?: number;
    public perceivingMethodName: string="";
    public note?: string;
    public cityId?: number;
    public cityName?: string;
    public districtId?: number;
    public districtName?: string;
    public apartmentNumber?: string;
    public street?: string;
    public buildingNumber?: string;
    public email?: string;
    public mobileNumber?: string;
}