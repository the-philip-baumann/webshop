import {IsEmail, IsInt, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength} from "class-validator";

export class CheckoutDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: 'You must not use less than 3 characters'
    })
    @MaxLength(30, {
        message: 'You must not use more than 30 characters'
    })
    prename: string;


    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
    message: 'You must not use less than 3 characters'
    })
    @MaxLength(30, {
        message: 'You must not use more than 30 characters'
    })
    lastname: string;


    @IsString()
    @IsNotEmpty()
    @MaxLength(50, {
        message: 'You must not use more than 50 characters'
    })
    @IsEmail()
    email: string;
}