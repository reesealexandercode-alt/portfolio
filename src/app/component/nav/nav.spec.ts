import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { Nav } from './nav';

describe('Nav', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nav, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links for the main portfolio sections', () => {
    fixture.detectChanges();

    const links = fixture.debugElement.queryAll(By.css('a[mat-button]'));

    expect(links.length).toBe(6);
    expect(links.some((link) => link.nativeElement.textContent.includes('About Me'))).toBeTrue();
  });
});
