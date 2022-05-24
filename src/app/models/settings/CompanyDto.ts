export class CompanyDto {
    public id: number = 0;
    public nameEn: string = "";
    public nameAr: string = "";
    public vatNumber?: string;
    public licenceNumber?: string;
    public description?: string;
    public imagePath?: string;
    public isActive: boolean = false;
    public file: string | ArrayBuffer | null = null;
    public fileName?: string | null;

}