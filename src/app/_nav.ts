import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    variant: 'success',
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
    variant: 'info',
    url: '/theme/exam_config/0',
    icon: 'cui-note'
  }, 
  {
    name: 'Bulk upload (comming soon)',
    url: 'bulk_upload',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }, 
  {
    name: 'Question bank (comming soon)',
    url: 'question_bank',
    icon: 'icon-cloud-download',
//    class: 'mt-auto',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
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
    name: 'Results',
    url: '/theme/result_dashboard',
    icon: 'icon-drop',
    variant: 'success'
  }
];
