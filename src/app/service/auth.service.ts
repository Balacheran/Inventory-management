import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Car } from '../Model/Customer';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  Getall(){
    return this.http.get(this.apiurl);
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
  GetCustomer():Observable<Car[]>{
    return this.http.get<Car[]>("http://localhost:3000/car");
  }

  Savecustomer(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/car",data);
  }

  GetCustomerbycode(code:any){
    return this.http.get("http://localhost:3000/customer/"+code);
  }
  GetCountry():Observable<Country[]>{
    return this.http.get<Country[]>('http://localhost:3000/country');
  }

  SaveAssociate(data:any,code:any){
    return this.http.put('http://localhost:3000/associate/'+code,data);
  }

}
