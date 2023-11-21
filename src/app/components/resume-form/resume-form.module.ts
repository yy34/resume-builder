
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeFormComponent } from './resume-form.component';
import { PersonalInfoComponent } from './form-fields/personal-info/personal-info.component';
import { EducationComponent } from './form-fields/education/education.component';
import { ExperienceComponent } from './form-fields/experience/experience.component';
import { SkillsComponent } from './form-fields/skills/skills.component';

@NgModule({
  declarations: [
    ResumeFormComponent,
    PersonalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  imports: [CommonModule],
  exports: [ResumeFormComponent, PersonalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent],
})
export class ResumeFormModule {}
