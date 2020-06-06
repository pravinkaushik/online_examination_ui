import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: ''
    }
  },
  {
    title: true,
    name: 'Configuration'
  },
  {
    name: 'Add Examination',
    variant: 'danger',
    url: '/theme/exam_config/0',
    icon: 'cui-note'
  },
/*  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  }, */
  {
    title: true,
    name: 'Components'
  },
  {
    divider: true
  },
  {
    name: 'Bulk upload (commig soon)',
    url: 'bulk_upload',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }, 
  {
    name: 'Question bank (commig soon)',
    url: 'question_bank',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
