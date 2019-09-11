import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { APIService, GetUserQuery } from "../API.service";
import { HomeComponent } from './home.component';
import { User } from '../models/user';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fakedFetchedUser: GetUserQuery;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('My photos');
  }));

  it('should render title inside a navbar tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Stock Photos');
  }));

  it('should render logout link inside the navbar tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-link')[1].textContent).toContain('Logout');
  }));

  it('should have a new object User', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.user).toBeTruthy(new User('', '', []));
  }));

  it("should fetch user data asynchronously", async () => {
    const apiService = fixture.debugElement.injector.get(APIService);
    let spy = spyOn(apiService, "GetUser").and.returnValue(
      Promise.resolve(fakedFetchedUser)
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.userFetched).toBe(fakedFetchedUser);
    });
  });
});
