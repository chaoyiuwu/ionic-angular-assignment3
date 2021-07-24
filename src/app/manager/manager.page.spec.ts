import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerPage } from './manager.page';

describe('CurrentOrderPage', () => {
  let component: ManagerPage;
  let fixture: ComponentFixture<ManagerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
