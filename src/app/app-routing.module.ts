import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNineComponent } from './components/home-nine/home-nine.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeNineComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component

    {path: '**', component: HomeNineComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
