import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const extractUser = (request): any => request['user'];

export const CurrentUser = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return extractUser(request);
  },
);
