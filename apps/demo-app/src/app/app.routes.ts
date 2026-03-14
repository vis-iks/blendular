import { Route } from '@angular/router';
import { ShowcaseLayoutComponent } from './layout/showcase-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShowcaseLayoutComponent,
    children: [
      { path: 'foundations', loadComponent: () => import('./pages/foundations/foundations.component').then(m => m.FoundationsComponent) },
      { path: 'navigation-data', loadComponent: () => import('./pages/page5/page5.component').then(m => m.Page5Component) },
      { path: 'inspector-panels', loadComponent: () => import('./pages/inspector-panels/inspector-panels.component').then(m => m.InspectorPanelsComponent) },
      { path: 'token-playground', loadComponent: () => import('./pages/token-playground/token-playground.component').then(m => m.TokenPlaygroundComponent) },
      { path: 'icon-browser', loadComponent: () => import('./pages/icon-browser/icon-browser.component').then(m => m.IconBrowserComponent) },
      { path: 'page1', loadComponent: () => import('./pages/page1/page1.component').then(m => m.Page1Component) },
      { path: 'page2', loadComponent: () => import('./pages/page2/page2.component').then(m => m.Page2Component) },
      { path: 'page3', loadComponent: () => import('./pages/page3/page3.component').then(m => m.Page3Component) },
      { path: 'page4', loadComponent: () => import('./pages/page4/page4.component').then(m => m.Page4Component) },
      { path: 'page5', loadComponent: () => import('./pages/page5/page5.component').then(m => m.Page5Component) },
      { path: 'page6', loadComponent: () => import('./pages/page6/page6.component').then(m => m.Page6Component) },
      { path: 'page7', loadComponent: () => import('./pages/page7/page7.component').then(m => m.Page7Component) },
      {
        path: 'workbench-blender',
        loadComponent: () => import('./pages/workspace-demo/workspace-demo.component').then(m => m.WorkspaceDemoComponent)
      },
      {
        path: 'workbench-ide',
        loadComponent: () => import('./pages/ide-workbench/ide-workbench.component').then(m => m.IdeWorkbenchComponent)
      },
      {
        path: 'shader-editor',
        loadComponent: () => import('./pages/shader-editor-demo/shader-editor-demo.component').then(m => m.ShaderEditorDemoComponent)
      },
      { path: '', redirectTo: 'foundations', pathMatch: 'full' }
    ]
  }
];
