import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ProfileService } from './profile.service';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('createuser')
  async createUser(@Body() userDto: UserDto) {
    const user = await this.profileService.createUser(userDto);
    return user;
  }

  @Get('getuser/:id')
  async getUser(@Param('id') profileid: string) {
    const getuser = await this.profileService.getUser(profileid);
    return getuser;
  }
}
