import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  });
  });
