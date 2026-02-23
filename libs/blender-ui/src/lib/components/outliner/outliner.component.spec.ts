import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutlinerComponent } from './outliner.component';
import { CdkTreeModule } from '@angular/cdk/tree';

describe('OutlinerComponent', () => {
  let component: OutlinerComponent;
  let fixture: ComponentFixture<OutlinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinerComponent, CdkTreeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OutlinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have nodes', () => {
    expect(component.nodes.length).toBeGreaterThan(0);
  });
});
