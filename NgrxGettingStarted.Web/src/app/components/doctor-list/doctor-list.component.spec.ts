import { DoctorListComponent } from './doctor-list.component';

import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provide, ViewChildMetadata } from '@angular/core';

describe('DoctorListComponent', () => {
    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            tcb.createAsync(DoctorListComponent).then(fixture => {
                expect(fixture.componentInstance instanceof DoctorListComponent).toBe(true, 'should create DoctorListComponent');
            });
        })));    
});
