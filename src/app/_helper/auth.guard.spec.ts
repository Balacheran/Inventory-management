import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('Logged in guard should', () => {
    let component: AuthGuard;
    let fixture: ComponentFixture<AuthGuard>;
  
    let authGuard: AuthGuard;
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    // async beforeEach
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, CommonModule, RouterTestingModule],
            providers: [AuthGuard,
                {provide: Router, useValue: router}
            ]
        })
            .compileComponents(); // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        authGuard = TestBed.get(AuthGuard);
    
    });

    it('be able to hit route when user is logged in', () => {
        authGuard.canActivate();
        authGuard.flag = true;
        localStorage.setItem('loggedIn','true');
        localStorage.getItem('loggedIn');

        expect(authGuard.canActivate()).toBe(true);
    });

    it('not be able to hit route when user is not logged in1', () => {
        authGuard.flag = 'false';
        authGuard.flag = false;


        authGuard.canActivate();
        authGuard.flag = false

        localStorage.setItem('loggedIn','false');
        localStorage.getItem('loggedIn');


        expect(authGuard.canActivate()).toBe(false);
    });
    it('not be able to hit route when user is not logged in', () => {
        authGuard.flag = 'null';
        authGuard.flag = null;


        authGuard.canActivate();
        authGuard.flag = null

        localStorage.setItem('loggedIn','false');
        localStorage.getItem('loggedIn');


        expect(authGuard.canActivate()).toBe(false);
    });
});
