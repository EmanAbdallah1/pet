
import { JopTypeDto } from "./JopTypeDto";

export class PositionDto
{
    public id: number=0;
    public nameEn: string="";
    public nameAr: string="";
    public description: string="";
    public isActive: boolean=false;
    public JopTypeId?:Number;
    public jopType?: JopTypeDto;


}