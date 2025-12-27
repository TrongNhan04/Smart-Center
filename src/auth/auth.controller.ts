import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { request } from 'http';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){
        // AuthService.sayHi()
    }

    @Post("login")
    login(@Req() request:Request){
        console.log(request.body)
        return this.authService.login()
    }

}
