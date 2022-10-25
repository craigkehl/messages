import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Add messages here'
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body)
    return 'created'
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id)
  }
}
