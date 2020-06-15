import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ApplicationFormComponent} from './application-form.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

import {MatProgressBarHarness} from '@angular/material/progress-bar/testing';

fdescribe('ApplicationFormComponent', () => {
  let component: ApplicationFormComponent;
  let fixture: ComponentFixture<ApplicationFormComponent>;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatProgressBarModule],
      declarations: [ApplicationFormComponent],
      schemas: [NO_ERRORS_SCHEMA]

    }).compileComponents();
    fixture = TestBed.createComponent(ApplicationFormComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a progressbar', async () => {
    const progressBarList = await loader.getAllHarnesses(MatProgressBarHarness);
    expect(progressBarList.length).toBe(1);
  });

  describe('the progressbar', () => {

    it('should be a definite progressbar', async () => {
      const progressBar = await loader.getHarness(MatProgressBarHarness);
      const pbMode = await progressBar.getMode();
      expect(pbMode).toBe('determinate');
    });

    it('should have a default value of 0', async () => {
      const progressBar = await loader.getHarness(MatProgressBarHarness);
      const pbValue = await progressBar.getValue();
      expect(pbValue).toBe(0);
    });

    it('should be controllable from the component', async () => {
      const progressBar = await loader.getHarness(MatProgressBarHarness);
      let pbValue = await progressBar.getValue();
      expect(pbValue).toBe(0);

      component.progressBarState = 33;
      pbValue = await progressBar.getValue();
      expect(pbValue).toBe(33);
    });

  });

  it('should show the personal data form by default', async ()=>{
    const appForm: HTMLElement = fixture.nativeElement;

    expect(appForm.querySelector('mat-card-content').innerHTML).toContain('app-personal-data-form');
  });

  it('should have the page controllable by the component', async ()=>{
    const appForm: HTMLElement = fixture.nativeElement;

    expect(appForm.querySelector('mat-card-content').innerHTML).toContain('app-personal-data-form');

    component.currentFormPage = component.FORM_PAGES.SalaryInfo;
    fixture.detectChanges();
    expect(appForm.querySelector('mat-card-content').innerHTML).toContain('app-salary-info-form');
  });


});
