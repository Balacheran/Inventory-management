<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< Updated upstream
export class HomeComponent {

=======
export class HomeComponent implements OnInit{
  constructor(
    private route:Router,private toastrService: ToastrService
  ) { }
  
  ngOnInit(): void {
  }
	logout() {
		localStorage.removeItem('loggedIn');
    this.route.navigate(['']);
		// window.location.reload();
    this.toastrService.info('B5 Car Dealership', 'Logout Successfully..');

	}
  onClickencry(){
    this.route.navigate(['/pages/encry'])
  }
  onClickCard () {
    this.route.navigate(['/pages/card'])
  }
>>>>>>> Stashed changes
}
