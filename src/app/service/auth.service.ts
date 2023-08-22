import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Car, Customer } from '../Model/Customer';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
<<<<<<< Updated upstream
  apiurl='http://localhost:3000/user';
=======
  apiurl='https://9a7e42f03e2b-698981503777300233.ngrok-free.app/user';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    return this.http.get('http://localhost:3000/role');
=======
    return this.http.get('https://9a7e42f03e2b-698981503777300233.ngrok-free.app/role');
>>>>>>> Stashed changes
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
<<<<<<< Updated upstream
    return this.http.get('http://localhost:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
  GetCustomer():Observable<Car[]>{
    return this.http.get<Car[]>("http://localhost:3000/car");
=======
    return this.http.get('https://9a7e42f03e2b-698981503777300233.ngrok-free.app/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('https://9a7e42f03e2b-698981503777300233.ngrok-free.app/roleaccess?role='+role+'&menu='+menu)
  }
  GetCustomer():Observable<Car[]>{
    return this.http.get<Car[]>("https://9a7e42f03e2b-698981503777300233.ngrok-free.app/car");
>>>>>>> Stashed changes
  }

  Savecustomer(data:any){
    console.log(data)
<<<<<<< Updated upstream
    return this.http.post("http://localhost:3000/car",data);
  }
  Savecustomerdata(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/customer",data);
  }
  GetCustomerdetails():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer");
=======
    return this.http.post("https://9a7e42f03e2b-698981503777300233.ngrok-free.app/car",data);
  }
  Savecustomerdata(data:any){
    console.log(data)
    return this.http.post("https://9a7e42f03e2b-698981503777300233.ngrok-free.app/customer",data);
  }
  GetCustomerdetails():Observable<Customer[]>{
    return this.http.get<Customer[]>("https://9a7e42f03e2b-698981503777300233.ngrok-free.app/customer");
>>>>>>> Stashed changes
  }

  Savecustomerdetails(data:any){
    console.log(data)
<<<<<<< Updated upstream
    return this.http.post("http://localhost:3000/customer",data);
  }
  GetCustomerbycode(code:any){
    return this.http.get("http://localhost:3000/customer/"+code);
  }
  GetCountry():Observable<Country[]>{
    return this.http.get<Country[]>('http://localhost:3000/country');
  }

  SaveAssociate(data:any,code:any){
    return this.http.put('http://localhost:3000/associate/'+code,data);
=======
    return this.http.post("https://9a7e42f03e2b-698981503777300233.ngrok-free.app/customer",data);
  }
  GetCustomerbycode(code:any){
    return this.http.get("https://9a7e42f03e2b-698981503777300233.ngrok-free.app/customer/"+code);
  }
  GetCountry():Observable<Country[]>{
    return this.http.get<Country[]>('https://9a7e42f03e2b-698981503777300233.ngrok-free.app/country');
  }

  SaveAssociate(data:any,code:any){
    return this.http.put('https://9a7e42f03e2b-698981503777300233.ngrok-free.app/associate/'+code,data);
>>>>>>> Stashed changes
  }

}
