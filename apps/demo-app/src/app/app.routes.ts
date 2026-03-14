import { Route } from '@angular/router';
import { ShowcaseLayoutComponent } from './layout/showcase-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShowcaseLayoutComponent,
    children: [
      { path: 'page1', loadComponent: () => import('./pages/page1/page1.component').then(m => m.Page1Component) },
      { path: 'page2', loadComponent: () => import('./pages/page2/page2.component').then(m => m.Page2Component) },
      { path: 'page3', loadComponent: () => import('./pages/page3/page3.component').then(m => m.Page3Component) },
      { path: 'page4', loadComponent: () => import('./pages/page4/page4.component').then(m => m.Page4Component) },
      { path: 'page5', loadComponent: () => import('./pages/page5/page5.component').then(m => m.Page5Component) },
      {
        path: 'page6',
        loadComponent: () => import('./pages/page6/page6.component').then(m => m.Page6Component)
      },
      {
        path: 'page7',
        loadComponent: () => import('./pages/page7/page7.component').then(m => m.Page7Component)
      },
      {
        path: 'workspace-demo',
        loadComponent: () => import('./pages/workspace-demo/workspace-demo.component').then(m => m.WorkspaceDemoComponent)
      },
      {
        path: 'shader-editor',
        loadComponent: () => import('./pages/shader-editor-demo/shader-editor-demo.component').then(m => m.ShaderEditorDemoComponent)
      },
      { path: '', redirectTo: 'page1', pathMatch: 'full' }
    ]
  }
];
