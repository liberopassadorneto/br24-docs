import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '713'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1c7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '7ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '7e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd26'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '38e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '683'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd1e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/assinatura',
        component: ComponentCreator('/category/assinatura', '0fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/integrador-whatsapp',
        component: ComponentCreator('/category/integrador-whatsapp', '159'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/whatsapp/billing/add-subscription',
        component: ComponentCreator('/whatsapp/billing/add-subscription', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/whatsapp/billing/change-to-new-plan',
        component: ComponentCreator('/whatsapp/billing/change-to-new-plan', '1e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/whatsapp/billing/get-products',
        component: ComponentCreator('/whatsapp/billing/get-products', 'abe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/whatsapp/billing/get-subscription',
        component: ComponentCreator('/whatsapp/billing/get-subscription', 'd4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/whatsapp/billing/update-subscription',
        component: ComponentCreator('/whatsapp/billing/update-subscription', 'b72'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
