import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create login component', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login).toBeTruthy();
  }));
  it(`should have as title 'login'`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.title).toEqual('login');
  }));
});
