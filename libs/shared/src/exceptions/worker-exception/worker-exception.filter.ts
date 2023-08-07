import { Catch, RpcExceptionFilter } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { AppException } from "shared/exceptions";

@Catch(AppException)
export class WorkerExceptionFilter implements RpcExceptionFilter {
  catch(exception: AppException): Observable<any> {
    console.log("exception >>>>>>>>> : ", exception);
    return of(exception.getResponse());
  }
}
