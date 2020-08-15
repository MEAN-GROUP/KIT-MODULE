import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { kitdata } from './kitdata';
import { deliveryorderdata } from './deliveryorderdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor( private http:HttpClient) { }

insertkitdata(data: kitdata): Observable<any> {
  return this.http.post('http://localhost:80/KitInvenory/kit/addKitToStock', data);
}

loginvalidation(data): Observable<any> {
  return this.http.post('http://localhost:80/KitInvenory/kit/loginvalidation', data);
}

insertdeliverystaffdata(data): Observable<any> {
  return this.http.post('http://localhost:80/KitInvenory/kit/addDeliveryStaff', data);
}

insertdeliveryorderlistdata(data:deliveryorderdata): Observable<any> {
  return this.http.post('http://localhost:80/KitInvenory/kit/addDeliveryOrderList', data);
}

getAllKitList(): Observable<any> {
  return this.http.get('http://localhost:80/KitInvenory/kit/getAllKitList');
}
getDeliveryStaffList(): Observable<any> {
  return this.http.get('http://localhost:80/KitInvenory/kit/getDeliveryStaffList');
}

getViewDeliveryOrderList(empId): Observable<any> {
  return this.http.get('http://localhost:80/KitInvenory/kit/getViewDeliveryOrderList/'+ empId);
}


getAllStockList(): Observable<any> {
   return this.http.get('http://localhost:80/KitInvenory/kit/getKitStockList');
}
getOrderList(): Observable<any> {
   return this.http.get('http://localhost:80/KitInvenory/kit/getOrderList');
}

getEditData(serialNo): Observable<any> {
   return this.http.get('http://localhost:80/KitInvenory/kit/getKitDetails/' + serialNo);
}

updatekitdata(serialNo, kitBody): Observable<any> {
  return this.http.put('http://localhost:80/KitInvenory/kit/updateKitDetail/' + serialNo, kitBody);
}

updateDeliveryStaffData(empId, dataBody): Observable<any> {
  return this.http.put('http://localhost:80/KitInvenory/kit/updateDeliveryStaffDetail/' + empId, dataBody);
}

updatereturndata(serialNo, kitBody): Observable<any> {
  return this.http.put('http://localhost:80/KitInvenory/kit/kitReturn/' + serialNo, kitBody);
}

updateDeliverConfirm(serialNo, patientId): Observable<any> {
  return this.http.put('http://localhost:80/KitInvenory/kit/updateDeliverConfirm/' + serialNo, patientId);
}

deleteData(serialNo): Observable<any> {
   return this.http.delete('http://localhost:80/KitInvenory/kit/kitDelete/' + serialNo);
}

deleteDeliveryStaffData(empId): Observable<any> {
console.log(empId);
   return this.http.delete('http://localhost:80/KitInvenory/kit/deliveryStaffDelete/' + empId);
}

exchangedata(oldSerialNo, exdata): Observable<any> {
   return this.http.put('http://localhost:80/KitInvenory/kit/kitExchange/' + oldSerialNo, exdata);
}
}