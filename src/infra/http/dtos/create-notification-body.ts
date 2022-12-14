/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length, IsUUID } from "class-validator";

export class CreateNotificationBody {
    //decorator que o campo não pode ser vazio 
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240)
    content: string;

    @IsNotEmpty()
    category: string;

    
}
