import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewContactRequestComponent } from './view-contact-request.component';

describe('ViewContactRequestComponent', () => {
  let component: ViewContactRequestComponent;
  let fixture: ComponentFixture<ViewContactRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContactRequestComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContactRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
