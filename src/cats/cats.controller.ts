import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  getCat(@Param('id') id: string): any {
    console.log(`We are getting the cat with ${id}`);
    //200 response code is automatic
    return {};
  }

  @Post()
  postCat(@Body() cat: any): string {
    //Inaccesible
    throw new HttpException('You cannot create cats', 423);
  }

  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    //error del servidor
    throw new HttpException(
      'Upps cats are too powerfull to be deleted, server crashed',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
