import { DoctorDetailComponent } from './doctor-detail.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('DoctorDetailComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(DoctorDetailComponent).then(fixture => {
                expect(fixture.componentInstance instanceof DoctorDetailComponent).toBe(true, 'should create DoctorDetailComponent');
            });
        })));    
});
