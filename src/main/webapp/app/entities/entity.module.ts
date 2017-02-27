import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccuestimatorNg2SharedModule } from '../shared';
import {
    FactorCategoryService,
    FactorCategoryPopupService,
    FactorCategoryComponent,
    FactorCategoryDetailComponent,
    FactorCategoryDialogComponent,
    FactorCategoryPopupComponent,
    FactorCategoryDeletePopupComponent,
    FactorCategoryDeleteDialogComponent,
    FactorCategoryResolvePagingParams,
    factorCategoryRoute,
    factorCategoryPopupRoute,
    StorageService,
    TaskCategoryService,
    TaskCategoryPopupService,
    TaskCategoryComponent,
    TaskCategoryDetailComponent,
    TaskCategoryDialogComponent,
    TaskCategoryPopupComponent,
    TaskCategoryDeletePopupComponent,
    TaskCategoryDeleteDialogComponent,
    TaskCategoryResolvePagingParams,
    taskCategoryRoute,
    taskCategoryPopupRoute,
    TasksService,
    TasksPopupService,
    TasksComponent,
    TasksDetailComponent,
    TasksDialogComponent,
    TasksPopupComponent,
    TasksDeletePopupComponent,
    TasksDeleteDialogComponent,
    TasksResolvePagingParams,
    tasksRoute,
    tasksPopupRoute,
    FactorsTaskMappingBaselineComponent,
    FactorsTaskMappingBaselinePopupComponent,
    EstimatesService,
    EstimatesPopupService,
    EstimatesComponent,
    EstimatesDetailComponent,
    EstimatesDialogComponent,
    EstimatesPopupComponent,
    EstimatesDeletePopupComponent,
    EstimatesDeleteDialogComponent,
    EstimatesResolvePagingParams,
    estimatesRoute,
    estimatesPopupRoute,
    ValuesService,
    ValuesPopupService,
    ValuesComponent,
    ValuesDetailComponent,
    ValuesDialogComponent,
    ValuesPopupComponent,
    ValuesDeletePopupComponent,
    ValuesDeleteDialogComponent,
    ValuesResolvePagingParams,
    valuesRoute,
    valuesPopupRoute,
    TemplateService,
    TemplatePopupService,
    TemplateComponent,
    TemplateDetailComponent,
    TemplateDialogComponent,
    TemplatePopupComponent,
    TemplateDeletePopupComponent,
    TemplateDeleteDialogComponent,
    TemplateResolvePagingParams,
    templateRoute,
    templatePopupRoute,
    ProjectService,
    ProjectPopupService,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectDialogComponent,
    ProjectPopupComponent,
    ProjectDeletePopupComponent,
    ProjectDeleteDialogComponent,
    ProjectResolvePagingParams,
    projectRoute,
    projectPopupRoute,
    ProjectTemplateMappingService,
    ProjectTemplateMappingPopupService,
    ProjectTemplateMappingComponent,
    ProjectTemplateMappingDetailComponent,
    ProjectTemplateMappingDialogComponent,
    ProjectTemplateMappingPopupComponent,
    ProjectTemplateMappingDeletePopupComponent,
    ProjectTemplateMappingDeleteDialogComponent,
    ProjectTemplateMappingResolvePagingParams,
    projectTemplateMappingRoute,
    projectTemplateMappingPopupRoute,
    FactorsService,
    FactorsPopupService,
    FactorsComponent,
    FactorsDetailComponent,
    FactorsDialogComponent,
    FactorsPopupComponent,
    FactorsDeletePopupComponent,
    FactorsDeleteDialogComponent,
    FactorsResolvePagingParams,
    factorsRoute,
    factorsPopupRoute,
    FactorsTaskMappingService,
    FactorsTaskMappingPopupService,
    FactorsTaskMappingComponent,
    FactorsTaskMappingDetailComponent,
    FactorsTaskMappingDialogComponent,
    FactorsTaskMappingPopupComponent,
    FactorsTaskMappingDeletePopupComponent,
    FactorsTaskMappingDeleteDialogComponent,
    FactorsTaskMappingResolvePagingParams,
    factorsTaskMappingRoute,
    factorsTaskMappingPopupRoute,
    ProjectUserMappingService,
    ProjectUserMappingPopupService,
    ProjectUserMappingComponent,
    ProjectUserMappingDetailComponent,
    ProjectUserMappingDialogComponent,
    ProjectUserMappingPopupComponent,
    ProjectUserMappingDeletePopupComponent,
    ProjectUserMappingDeleteDialogComponent,
    ProjectUserMappingResolvePagingParams,
    projectUserMappingRoute,
    projectUserMappingPopupRoute,
    /* jhipster-needle-add-entity-to-module-import - JHipster will add entity classes here */
} from './';

let ENTITY_STATES = [
    ...factorCategoryRoute,
    ...factorCategoryPopupRoute,
    ...factorsRoute,
    ...factorsPopupRoute,
    ...taskCategoryRoute,
    ...taskCategoryPopupRoute,
    ...tasksRoute,
    ...tasksPopupRoute,
    ...factorsTaskMappingRoute,
    ...factorsTaskMappingPopupRoute,
    ...estimatesRoute,
    ...estimatesPopupRoute,
    ...valuesRoute,
    ...valuesPopupRoute,
    ...templateRoute,
    ...templatePopupRoute,
    ...projectRoute,
    ...projectPopupRoute,
    ...projectTemplateMappingRoute,
    ...projectTemplateMappingPopupRoute,
    ...projectUserMappingRoute,
    ...projectUserMappingPopupRoute,
    /* jhipster-needle-add-entity-to-module-states - JHipster will add entity state vars here */
];

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        AccuestimatorNg2SharedModule,
        InfiniteScrollModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        FactorCategoryComponent,
        FactorCategoryDetailComponent,
        FactorCategoryDialogComponent,
        FactorCategoryDeleteDialogComponent,
        FactorCategoryPopupComponent,
        FactorCategoryDeletePopupComponent,
        FactorsComponent,
        FactorsDetailComponent,
        FactorsDialogComponent,
        FactorsDeleteDialogComponent,
        FactorsPopupComponent,
        FactorsDeletePopupComponent,
        TaskCategoryComponent,
        TaskCategoryDetailComponent,
        TaskCategoryDialogComponent,
        TaskCategoryDeleteDialogComponent,
        TaskCategoryPopupComponent,
        TaskCategoryDeletePopupComponent,
        TasksComponent,
        TasksDetailComponent,
        TasksDialogComponent,
        TasksDeleteDialogComponent,
        TasksPopupComponent,
        TasksDeletePopupComponent,
        FactorsTaskMappingComponent,
        FactorsTaskMappingDetailComponent,
        FactorsTaskMappingDialogComponent,
        FactorsTaskMappingBaselineComponent,
        FactorsTaskMappingBaselinePopupComponent,
        FactorsTaskMappingDeleteDialogComponent,
        FactorsTaskMappingPopupComponent,
        FactorsTaskMappingDeletePopupComponent,
        EstimatesComponent,
        EstimatesDetailComponent,
        EstimatesDialogComponent,
        EstimatesDeleteDialogComponent,
        EstimatesPopupComponent,
        EstimatesDeletePopupComponent,
        ValuesComponent,
        ValuesDetailComponent,
        ValuesDialogComponent,
        ValuesDeleteDialogComponent,
        ValuesPopupComponent,
        ValuesDeletePopupComponent,
        TemplateComponent,
        TemplateDetailComponent,
        TemplateDialogComponent,
        TemplateDeleteDialogComponent,
        TemplatePopupComponent,
        TemplateDeletePopupComponent,
        ProjectComponent,
        ProjectDetailComponent,
        ProjectDialogComponent,
        ProjectDeleteDialogComponent,
        ProjectPopupComponent,
        ProjectDeletePopupComponent,
        ProjectTemplateMappingComponent,
        ProjectTemplateMappingDetailComponent,
        ProjectTemplateMappingDialogComponent,
        ProjectTemplateMappingDeleteDialogComponent,
        ProjectTemplateMappingPopupComponent,
        ProjectTemplateMappingDeletePopupComponent,
        FactorsTaskMappingComponent,
        FactorsTaskMappingDetailComponent,
        FactorsTaskMappingDialogComponent,
        FactorsTaskMappingDeleteDialogComponent,
        FactorsTaskMappingPopupComponent,
        FactorsTaskMappingDeletePopupComponent,
        ProjectUserMappingComponent,
        ProjectUserMappingDetailComponent,
        ProjectUserMappingDialogComponent,
        ProjectUserMappingDeleteDialogComponent,
        ProjectUserMappingPopupComponent,
        ProjectUserMappingDeletePopupComponent,
        /* jhipster-needle-add-entity-to-module-declarations - JHipster will add entity component classes here */
    ],
    entryComponents: [
        FactorCategoryDialogComponent,
        FactorCategoryPopupComponent,
        FactorCategoryDeleteDialogComponent,
        FactorCategoryDeletePopupComponent,
        FactorsDialogComponent,
        FactorsPopupComponent,
        FactorsDeleteDialogComponent,
        FactorsDeletePopupComponent,
        TaskCategoryDialogComponent,
        TaskCategoryPopupComponent,
        TaskCategoryDeleteDialogComponent,
        TaskCategoryDeletePopupComponent,
        TasksDialogComponent,
        TasksPopupComponent,
        TasksDeleteDialogComponent,
        TasksDeletePopupComponent,
        FactorsTaskMappingDialogComponent,
        FactorsTaskMappingBaselineComponent,
        FactorsTaskMappingBaselinePopupComponent,
        FactorsTaskMappingPopupComponent,
        FactorsTaskMappingDeleteDialogComponent,
        FactorsTaskMappingDeletePopupComponent,
        EstimatesDialogComponent,
        EstimatesPopupComponent,
        EstimatesDeleteDialogComponent,
        EstimatesDeletePopupComponent,
        ValuesDialogComponent,
        ValuesPopupComponent,
        ValuesDeleteDialogComponent,
        ValuesDeletePopupComponent,
        TemplateDialogComponent,
        TemplatePopupComponent,
        TemplateDeleteDialogComponent,
        TemplateDeletePopupComponent,
        ProjectDialogComponent,
        ProjectPopupComponent,
        ProjectDeleteDialogComponent,
        ProjectDeletePopupComponent,
        ProjectTemplateMappingDialogComponent,
        ProjectTemplateMappingPopupComponent,
        ProjectTemplateMappingDeleteDialogComponent,
        ProjectTemplateMappingDeletePopupComponent,
        FactorsTaskMappingDialogComponent,
        FactorsTaskMappingPopupComponent,
        FactorsTaskMappingDeleteDialogComponent,
        FactorsTaskMappingDeletePopupComponent,
        ProjectUserMappingDialogComponent,
        ProjectUserMappingPopupComponent,
        ProjectUserMappingDeleteDialogComponent,
        ProjectUserMappingDeletePopupComponent,
        /* jhipster-needle-add-entity-to-module-entryComponents - JHipster will add entity dialog classes here */
    ],
    providers: [
        FactorCategoryService,
        FactorCategoryPopupService,
    FactorCategoryResolvePagingParams,
        FactorsService,
        StorageService,
        FactorsPopupService,
    FactorsResolvePagingParams,
        TaskCategoryService,
        TaskCategoryPopupService,
    TaskCategoryResolvePagingParams,
        TasksService,
        TasksPopupService,
    TasksResolvePagingParams,
        FactorsTaskMappingService,
        FactorsTaskMappingPopupService,
    FactorsTaskMappingResolvePagingParams,
        EstimatesService,
        EstimatesPopupService,
    EstimatesResolvePagingParams,
        ValuesService,
        ValuesPopupService,
    ValuesResolvePagingParams,
        TemplateService,
        TemplatePopupService,
    TemplateResolvePagingParams,
        ProjectService,
        ProjectPopupService,
    ProjectResolvePagingParams,
        ProjectTemplateMappingService,
        ProjectTemplateMappingPopupService,
    ProjectTemplateMappingResolvePagingParams,
        FactorsService,
        FactorsPopupService,
    FactorsResolvePagingParams,
        ProjectUserMappingService,
        ProjectUserMappingPopupService,
    ProjectUserMappingResolvePagingParams,
        /* jhipster-needle-add-entity-to-module-providers - JHipster will add entity Service classes here */
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccuestimatorNg2EntityModule {}

