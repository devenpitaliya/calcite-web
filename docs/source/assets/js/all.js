(function () {
  calcite.extend(calciteMarketing);
  calcite.init();
  var menuData = {
    header: {
      theme: 'web',
      brand: {
        label: 'Calcite Web',
        brandText: 'Calcite Web',
        href: ROOT,
        image: ROOT + 'assets/img/docs/logo.svg',
        width: 28,
        height: 28
      },
      menus: [
        [
          {
            label: 'Documentation',
            href: ROOT + 'documentation/'
          },
          {
            label: 'Guides',
            menus: [
              {
                label: 'Accessibility',
                href: ROOT + 'guides/a11y/',
                icon: [
                  'M11.9 42.315v-2.636h-.4a1.786 1.786 0 0 1-1.78-1.915l.953-12.595a5.669 5.669 0 0 1 5.64-5.27h7.058a5.646 5.646 0 0 1 5.36 3.854l.759-.254A6.446 6.446 0 0 0 23.37 19.1h-7.058a6.47 6.47 0 0 0-6.438 6.012l-.953 12.593a2.585 2.585 0 0 0 2.178 2.743v1.867a2.588 2.588 0 0 0 2.585 2.585H26v-.8H13.685a1.787 1.787 0 0 1-1.785-1.785zM13.1 9a6.9 6.9 0 1 1 6.9 6.9A6.908 6.908 0 0 1 13.1 9zm.8 0A6.1 6.1 0 1 0 20 2.9 6.107 6.107 0 0 0 13.9 9zm25 26v.5a6.403 6.403 0 0 1-6 6.38V46h-.8v-4.12a6.403 6.403 0 0 1-6-6.38V35h.8v.5a5.603 5.603 0 0 0 5.2 5.58V41h.8v.08a5.603 5.603 0 0 0 5.2-5.58V35zM29 46.9h7v-.8h-7zm3.5-21.8a4.405 4.405 0 0 1 4.4 4.4v5a4.4 4.4 0 0 1-8.8 0v-5a4.405 4.405 0 0 1 4.4-4.4zm-3.56 4H31v.8h-2.1v1.2H31v.8h-2.1v1.2H31v.8h-2.1v.6a3.6 3.6 0 1 0 7.2 0v-.6H34v-.8h2.1v-1.2H34v-.8h2.1v-1.2H34v-.8h2.06a3.58 3.58 0 0 0-7.12 0z'
                ]
              },
              {
                label: 'Localization',
                href: ROOT + 'guides/localization/',
                icon: [
                  'M18 27.9H5.5a4.405 4.405 0 0 1-4.4-4.4v-18a4.405 4.405 0 0 1 4.4-4.4h18a4.405 4.405 0 0 1 4.4 4.4V18h-.8V5.5a3.604 3.604 0 0 0-3.6-3.6h-18a3.604 3.604 0 0 0-3.6 3.6v18a3.604 3.604 0 0 0 3.6 3.6H18zM6.402 21.112a17.785 17.785 0 0 0 7.511-3.77A17.723 17.723 0 0 1 9.19 8.9H6v-.8h8.784L12.29 5.604l.566-.565L15.916 8.1H23v.8h-3.19a17.682 17.682 0 0 1-4.718 8.443 16.646 16.646 0 0 0 4.599 2.8 6.545 6.545 0 0 0-.52.647 17.374 17.374 0 0 1-4.67-2.893 18.552 18.552 0 0 1-7.903 3.991zm8.099-4.32A16.798 16.798 0 0 0 18.982 8.9h-8.966a16.857 16.857 0 0 0 4.485 7.891zM42.5 20.1h-18a4.405 4.405 0 0 0-4.4 4.4v18a4.405 4.405 0 0 0 4.4 4.4h18a4.405 4.405 0 0 0 4.4-4.4v-18a4.405 4.405 0 0 0-4.4-4.4zm3.6 22.4a3.604 3.604 0 0 1-3.6 3.6h-18a3.604 3.604 0 0 1-3.6-3.6v-18a3.604 3.604 0 0 1 3.6-3.6h18a3.604 3.604 0 0 1 3.6 3.6zm-21.062.13l.725.34 3.312-7.074h8.85l3.312 7.073.725-.339L33.5 24.557zm4.411-7.534l4.051-8.653 4.051 8.653z'
                ]
              },
              {
                label: 'Mobile',
                href: ROOT + 'guides/mobile/',
                icon: [
                  'M24 27.9H4.375A2.277 2.277 0 0 1 2.1 25.625V4.375A2.277 2.277 0 0 1 4.375 2.1h30.25A2.277 2.277 0 0 1 36.9 4.375V9h-.8V4.375A1.477 1.477 0 0 0 34.625 2.9H4.375A1.477 1.477 0 0 0 2.9 4.375v21.25A1.477 1.477 0 0 0 4.375 27.1H24zM33.1 9h.8V4h-.8zM7.9 26V4h-.8v22zM6 13.9v-.8H4.1v3.8H6v-.8H4.9v-2.2zm39.9.072v29.056a2.875 2.875 0 0 1-2.872 2.872H28.972a2.875 2.875 0 0 1-2.872-2.872V13.972a2.875 2.875 0 0 1 2.872-2.872h14.056a2.875 2.875 0 0 1 2.872 2.872zm-.8 0a2.075 2.075 0 0 0-2.072-2.072H28.972a2.075 2.075 0 0 0-2.072 2.072v29.056a2.075 2.075 0 0 0 2.072 2.072h14.056a2.075 2.075 0 0 0 2.072-2.072zM28 40.9h16v-.8H28zm0-25h16v-.8H28zm9.1 27.2h-2.2V42h-.8v1.9h3.8V42h-.8z'
                ]
              },
              {
                label: 'Icons',
                href: ROOT + 'guides/icons/',
                icon: [
                  'M4.1 43.9h8.8v-8.8H4.1zm.8-8h7.2v7.2H4.9zm1.2-3h7.8v-7.8H6.1zm.8-7h6.2v6.2H6.9zm1.2-4h6.8v-6.8H8.1zm.8-6h5.2v5.2H8.9zm1.2-5h5.8V5.1h-5.8zm.8-5h4.2v4.2h-4.2zm5.2 39h9.8v-9.8h-9.8zm.8-9h8.2v8.2h-8.2zm8-10.8h-7.8v7.8h7.8zm-.8 7h-6.2v-6.2h6.2zm-.2-17h-5.8v5.8h5.8zm-.8 5h-4.2v-4.2h4.2zm-.2-15h-3.8v3.8h3.8zm-.8 3h-2.2V5.9h2.2zm18.8-4h-6.8v6.8h6.8zm-.8 6h-5.2V4.9h5.2zm-4 10.8h5.8v-5.8h-5.8zm.8-5h4.2v4.2h-4.2zm6 10.2h-4.8v4.8h4.8zm-.8 4h-3.2v-3.2h3.2zm-2 7v3.8h3.8v-3.8zm3 3h-2.2v-2.2h2.2zm-14 2.8h7.8v-7.8h-7.8zm.8-7h6.2v6.2h-6.2zm5-10.8h-6.8v6.8h6.8zm-.8 6h-5.2v-5.2h5.2zm-1.2-16h-5.8v5.8h5.8zm-.8 5h-4.2v-4.2h4.2zm-1.2-15h-4.8v4.8h4.8zm-.8 4h-3.2V5.9h3.2z'
                ]
              },
              {
                label: 'Grid',
                href: ROOT + 'guides/grid/'
              }
            ],
            tiles: [
              {
                label: 'Quickstart',
                href: ROOT + 'guides/quickstart/',
                icon: [
                  'M37.777 20.192l-8.538 5.32a3.298 3.298 0 1 0 .46.837c-.018-.05-.047-.092-.067-.14L38.2 20.87zm-8.926 8.415a2.598 2.598 0 1 1 .095-1.987 2.582 2.582 0 0 1-.095 1.987zm12.703-15.25l2.112 2.127.568-.563-4.651-4.682-.568.564 1.975 1.988-2.206 2.192a17.212 17.212 0 0 0-1.582-1.39A16.768 16.768 0 0 0 26.9 10.062V7.9h2V4.1h-4.8v3.8h2v2.17a19.44 19.44 0 0 0-4.113.617l.2.775A16.385 16.385 0 0 1 43.1 27.463a16.4 16.4 0 0 1-21.31 15.894l-.218.77a19.365 19.365 0 0 0 5.244.745 16.778 16.778 0 0 0 10.247-3.432A17.347 17.347 0 0 0 43.9 27.463a17.487 17.487 0 0 0-4.561-11.904zM24.9 4.9h3.2v2.2h-3.2zM8.667 17.43C5.95 22.86 5.352 27.943 6.893 32.546a19.552 19.552 0 0 0 10.241 10.978l.393-.694c-1.085-.707-4.857-6.255-5.48-12.023a9.857 9.857 0 0 1 2.228-8.019l4.624 4.417V12.1H3.086zm9.433 7.904l-3.847-3.674-.276.28c-2.207 2.237-3.123 5.249-2.724 8.953a25.148 25.148 0 0 0 4.235 10.815 18.145 18.145 0 0 1-7.836-9.416c-1.495-4.466-.868-9.434 1.862-14.764l.136-.265L5.082 12.9H18.1z'
                ]
              },
              {
                label: 'Typography',
                href: ROOT + 'guides/type/',
                icon: [
                  'M22,25c-0.816,0-1.549-0.503-1.841-1.266l-0.251-0.655l-0.06-0.155L15.484,12H15.16l-4.975,12.203 C9.989,24.685,9.521,25,9,25v0.8h3V25c-0.471,0-0.852-0.382-0.852-0.853c0-0.105,0.02-0.209,0.058-0.308l0.044-0.115 c0.09-0.227,0.182-0.447,0.251-0.616L12.334,21h5.918l1.295,3.187c0.123,0.302-0.021,0.646-0.323,0.769 C19.153,24.985,19.077,25,19,25v0.8h3V25z M12.753,20l0.455-1.08l2.116-5.13L17.846,20H12.753z M39,13H18v-1h21V13z M39,19H21v-1 h18V19z M39,25H24v-1h15V25z M39,31H9v-1h30V31z M39,37H9v-1h30V37z'
                ]
              },
              {
                label: 'Forms',
                href: ROOT + 'guides/forms/',
                icon: [
                  'M27 13.1v.8h-7v-.8zm-9 10.8h15.006v-.8H18zm-2.575 21H10.5a1.403 1.403 0 0 1-1.4-1.4v-35a1.403 1.403 0 0 1 1.4-1.4h3.97a2.224 2.224 0 0 1 1.855-1h3.798a3.4 3.4 0 0 1 6.754 0h3.798a2.224 2.224 0 0 1 1.854 1H36.5a1.403 1.403 0 0 1 1.4 1.4v12.116a2.479 2.479 0 0 0-.208.171l-.592.594V8.5a.6.6 0 0 0-.6-.6h-3.643a2.22 2.22 0 0 1 .043.425V10.9H14.1V8.325a2.22 2.22 0 0 1 .043-.425H10.5a.6.6 0 0 0-.6.6v35a.6.6 0 0 0 .6.6h5.2zM14.9 10.1h17.2V8.325A1.426 1.426 0 0 0 30.675 6.9H26.1v-.4a2.6 2.6 0 1 0-5.2 0v.4h-4.575A1.426 1.426 0 0 0 14.9 8.325zm10-4.1v1a.902.902 0 0 1-.9.9h-1a.902.902 0 0 1-.9-.9V6a.902.902 0 0 1 .9-.9h1a.902.902 0 0 1 .9.9zm-.8 0a.1.1 0 0 0-.1-.1h-1a.1.1 0 0 0-.1.1v1a.1.1 0 0 0 .1.1h1a.1.1 0 0 0 .1-.1zM18 18.9h15.006v-.8H18zm0 10h11.564l.8-.8H18zm-3.1-9h-2.8v-2.8h2.8zm-.8-2h-1.2v1.2h1.2zm23 17.691V43.5a.6.6 0 0 1-.6.6H25.435l-.8.8H36.5a1.403 1.403 0 0 0 1.4-1.4v-8.71zm-22.2-10.69h-2.8V22.1h2.8zm-.8-2h-1.2V24.1h1.2zm-2.048 9.15h2.8v2.802h-2.8zm.8 2h1.2v-1.198h-1.2zm2.048-4.15h-2.8V27.1h2.8zm-.8-2h-1.2V29.1h1.2zm3.946 5.15v.802h6.566l.8-.801zm19.593-4.093l.448 2.677-8.486 8.487-.567-.566 8.195-8.195-.285-1.709-15.855 15.825a1.831 1.831 0 0 1-.688.43l-3.521 1.22 1.213-3.525a1.84 1.84 0 0 1 .431-.693l20.937-20.92 2.578 2.577zm3.267-4.392l-1.445-1.446-20.37 20.356a1.018 1.018 0 0 0-.242.386l-.678 1.971 1.968-.682a.997.997 0 0 0 .384-.24z'
                ]
              },
              {
                label: 'Color',
                href: ROOT + 'guides/color/',
                icon: [
                  'M13.08 29.901a2.9 2.9 0 1 0-2.9-2.9 2.903 2.903 0 0 0 2.9 2.9zm0-5a2.1 2.1 0 1 1-2.101 2.1 2.103 2.103 0 0 1 2.1-2.1zm33.176-4.883a5.71 5.71 0 0 1-.324 6.053c-2.98 4.723-12.175 8.59-20.919 9.122l.89-.87c8.22-.713 16.595-4.308 19.352-8.679a4.891 4.891 0 0 0 .298-5.245c-.62-1.143-2.512-1.56-4.842-1.769l.673-.734c2.29.257 4.145.782 4.872 2.122zM11.98 18a2.9 2.9 0 1 0-2.9 2.9 2.903 2.903 0 0 0 2.9-2.9zm-2.9 2.1a2.1 2.1 0 1 1 2.1-2.1 2.103 2.103 0 0 1-2.1 2.1zm2.985 13.319C5.45 30.988 1.16 26.402 1.18 21.151c.03-8.108 10.172-14.857 22.61-15.045 2.796-.038 4.575.458 5.389 1.53.96 1.267.45 2.996-.045 4.667-.612 2.07-.895 3.371.346 4.006a7.386 7.386 0 0 0 1.036.425l.6.179c.195.051.415.084.62.128l-.71.668c-.04-.01-.086-.016-.126-.026l-.624-.185a8.163 8.163 0 0 1-1.16-.477c-1.922-.982-1.299-3.088-.75-4.945.439-1.48.892-3.011.176-3.955-.64-.844-2.23-1.253-4.74-1.215-12.005.181-21.794 6.573-21.822 14.248-.02 4.991 4.192 9.355 10.661 11.633-.095.09-.195.173-.284.273-.097.107-.195.23-.292.36zm7.015-23.318a2.9 2.9 0 1 0 2.9 2.9 2.903 2.903 0 0 0-2.9-2.9zm0 5a2.1 2.1 0 1 1 2.1-2.1 2.103 2.103 0 0 1-2.1 2.1zm25.613-5.695l-.004-.003c-.523-.515-1.434-.363-2.157.354L25.973 25.351l-8.45 8.202.052.053c-1.006.344-3.528 1.402-4.224 3.528a14.773 14.773 0 0 1-3.057 4.675l-.357.362.437.262a5.559 5.559 0 0 0 2.705.605 9.462 9.462 0 0 0 4.47-1.232 6.447 6.447 0 0 0 3.425-5.585v-.011l7.516-7.358 15.84-17.276c.731-.73.883-1.642.362-2.169zM17.172 41.1c-2.932 1.567-5.03 1.164-5.92.851a14.706 14.706 0 0 0 2.807-4.43.374.374 0 0 1 .11.12.57.57 0 0 1 .069.272c-.004 1.546 1.646 1.75 2.85 1.899a4.172 4.172 0 0 1 1.388.313 5.578 5.578 0 0 1-1.304.975zm1.835-1.575a3.923 3.923 0 0 0-1.82-.507c-1.3-.161-2.15-.325-2.15-1.103a1.363 1.363 0 0 0-.164-.655 1.166 1.166 0 0 0-.393-.427l-.086-.048a6.914 6.914 0 0 1 3.592-2.472l2.184 2.084a5.998 5.998 0 0 1-1.163 3.128zm24.745-28.503L27.915 28.295l-7.338 7.183-1.914-1.916 7.863-7.633 16.56-15.595c.418-.415.873-.52 1.04-.362.16.166.068.609-.374 1.05z'
                ]
              }
            ]
          },
          {
            label: 'Quick Reference',
            href: ROOT + 'quick-reference/'
          },
        ]
      ],
      search: {
        label: 'Search',
        image: [
          'M15.61 14.531l8.132 8.133-1.078 1.078-8.156-8.18-.188.188c-.844.672-1.773 1.164-2.789 1.476s-2.04.446-3.07.399a8.513 8.513 0 0 1-5.648-2.508c-.86-.859-1.5-1.824-1.922-2.894s-.633-2.16-.633-3.27.211-2.199.633-3.27 1.062-2.027 1.922-2.87c.843-.86 1.8-1.5 2.87-1.922s2.16-.633 3.27-.633 2.2.211 3.27.633 2.035 1.062 2.894 1.922a8.406 8.406 0 0 1 1.805 2.648 8.61 8.61 0 0 1 .293 6.094 8.626 8.626 0 0 1-1.512 2.812l-.14.141.046.023zm-6.704 1.594c.797 0 1.574-.13 2.332-.387a7.404 7.404 0 0 0 2.098-1.113l1.242-1.265a7.209 7.209 0 0 0 1.547-4.864 7.071 7.071 0 0 0-2.086-4.629c-.672-.687-1.445-1.21-2.32-1.57s-1.797-.539-2.766-.539-1.89.18-2.765.54-1.649.882-2.32 1.57c-.704.703-1.231 1.496-1.583 2.378s-.527 1.785-.527 2.707.176 1.825.527 2.707.88 1.676 1.582 2.38a7.049 7.049 0 0 0 2.309 1.546 7.06 7.06 0 0 0 2.73.539z'
        ],
        dialog: {
          action: ROOT + 'search/',
          label: 'Calcite Web',
          'submitLabel': 'Search',
          'cancelLabel': 'Cancel',
          'queryLabel': 'Search Calcite Web...'
        }
      }
    },
    footer: {
      hideMenus: false,
      label: 'Esri',
      brand: {
        label: 'Esri: The Science of Where',
        href: 'https://www.esri.com/about-esri',
        viewBox: '0 0 114 90',
        path: ROOT + 'assets/global-nav/dist/img/gnav-tsow-frame.svg'
      },
      menu: {
        label: 'Esri Sites',
        menu: [
          {
            label: 'ArcGIS',
            menu: [
              {
                label: 'About ArcGIS',
                href: 'https://www.esri.com/arcgis/about-arcgis'
              },
              {
                label: 'ArcGIS Pro',
                href: 'https://www.esri.com/en/arcgis/products/arcgis-pro/Overview'
              },
              {
                label: 'ArcGIS Enterprise',
                href: 'https://www.esri.com/en/arcgis/products/arcgis-enterprise/Overview'
              },
              {
                label: 'ArcGIS Online',
                href: 'https://www.esri.com/software/arcgis/arcgisonline'
              },
              {
                label: 'Apps',
                href: 'https://www.esri.com/software/apps'
              },
              {
                label: 'ArcGIS for Developers',
                href: 'https://developers.arcgis.com/'
              }
            ]
          },
          {
            label: 'Community',
            menu: [
              {
                label: 'Esri Community (GeoNet)',
                href: 'https://geonet.esri.com/'
              },
              {
                label: 'ArcGIS Blog',
                href: 'https://blogs.esri.com/esri/arcgis'
              },
              {
                label: 'Early Adopter Community',
                href: 'https://www.esri.com/early-adopter-community'
              },
              {
                label: 'Events',
                href: 'https://www.esri.com/events'
              }
            ]
          },
          {
            label: 'Understanding GIS',
            menu: [
              {
                label: 'What is GIS?',
                href: 'https://www.esri.com/what-is-gis'
              },
              {
                label: 'Training',
                href: 'https://www.esri.com/training'
              },
              {
                label: 'Maps We Love',
                href: 'https://www.esri.com/products/maps-we-love'
              },
              {
                label: 'Blog',
                href: 'https://www.esri.com/about/newsroom/blog'
              },
              {
                label: 'WhereNext Magazine',
                href: 'https://www.esri.com/about/newsroom/publications/wherenext/'
              },
              {
                label: 'Learn ArcGIS',
                href: 'https://learn.arcgis.com/en/'
              }
            ]
          },
          {
            label: 'Company',
            menu: [
              {
                label: 'About Esri',
                href: 'https://www.esri.com/about-esri'
              },
              {
                label: 'Contact Us',
                href: 'https://www.esri.com/about-esri/contact'
              },
              {
                label: 'Esri Offices Worldwide',
                href: 'https://www.esri.com/about-esri/contact#international'
              },
              {
                label: 'Careers',
                href: 'https://www.esri.com/careers'
              },
              {
                label: 'Open Vision',
                href: 'https://www.esri.com/software/open'
              },
              {
                label: 'Partners',
                href: 'https://www.esri.com/partners'
              }
            ]
          },
          {
            label: 'Special programs',
            menu: [
              {
                label: 'Conservation',
                href: 'https://www.esri.com/esri-conservation-program'
              },
              {
                label: 'Disaster Response',
                href: 'https://www.esri.com/services/disaster-response'
              },
              {
                label: 'Education',
                href: 'https://www.esri.com/industries/education'
              },
              {
                label: 'Nonprofit',
                href: 'https://www.esri.com/nonprofit'
              },
              {
                label: 'US Navy SeaPort-e Information',
                href: 'https://www.esri.com/landing-pages/seaport'
              }
            ]
          }
        ]
      },
      social: {
        label: 'Social Media',
        menu: [
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/esrigis',
            image: {
              viewBox: '0 0 38 38',
              path: ['M38 38V0H0v38h17.2V21.9H14v-5.7h3.2v-3.7c0-2.6 1.2-6.7 6.7-6.7h4.9v5.5h-3.6c-.6 0-1.4.3-1.4 1.5v3.3h5.1l-.6 5.7h-4.5v16.1H38z']
            }
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/Esri',
            image: {
              viewBox: '0 0 512 512',
              path: ['M512.002 97.211c-18.84 8.354-39.082 14.001-60.33 16.54 21.686-13 38.342-33.585 46.186-58.115a210.29 210.29 0 0 1-66.705 25.49c-19.16-20.415-46.461-33.17-76.674-33.17-58.011 0-105.042 47.029-105.042 105.039 0 8.233.929 16.25 2.72 23.939-87.3-4.382-164.701-46.2-216.509-109.753-9.042 15.514-14.223 33.558-14.223 52.809 0 36.444 18.544 68.596 46.73 87.433a104.614 104.614 0 0 1-47.577-13.139c-.01.438-.01.878-.01 1.321 0 50.894 36.209 93.348 84.261 103a105.245 105.245 0 0 1-27.674 3.687c-6.769 0-13.349-.66-19.764-1.888 13.368 41.73 52.16 72.104 98.126 72.949-35.95 28.176-81.243 44.967-130.458 44.967-8.479 0-16.84-.496-25.058-1.471 46.486 29.807 101.701 47.197 161.021 47.197 193.211 0 298.868-160.062 298.868-298.872 0-4.554-.104-9.084-.305-13.59 20.526-14.809 38.335-33.309 52.417-54.373z']
            }
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/esri',
            image: {
              viewBox: '0 0 24 24',
              path: ['M0 0v24h24V0zm8 19H5V8h3zM6.5 6.7A1.8 1.8 0 1 1 8.3 5a1.8 1.8 0 0 1-1.8 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5z']
            }
          },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/esrigram/',
            image: {
              viewBox: '0 0 30 30',
              path: ['M29.91 8.815c-.073-1.596-.327-2.686-.697-3.64a7.354 7.354 0 0 0-1.73-2.657 7.352 7.352 0 0 0-2.657-1.73C23.87.416 22.78.162 21.184.09 19.584.017 19.074 0 15 0s-4.585.017-6.184.09C7.219.163 6.129.417 5.174.787a7.352 7.352 0 0 0-2.656 1.73 7.354 7.354 0 0 0-1.73 2.657C.416 6.13.162 7.22.09 8.815.017 10.415 0 10.926 0 15s.017 4.585.09 6.184c.073 1.597.327 2.687.697 3.642a7.353 7.353 0 0 0 1.73 2.656 7.353 7.353 0 0 0 2.657 1.73c.955.371 2.045.625 3.642.698 1.6.073 2.11.09 6.184.09s4.585-.017 6.184-.09c1.597-.073 2.687-.327 3.642-.697a7.353 7.353 0 0 0 2.656-1.73 7.353 7.353 0 0 0 1.73-2.657c.371-.955.625-2.045.698-3.642.073-1.6.09-2.11.09-6.184s-.017-4.585-.09-6.185zm-2.997 12.232c-.064 1.412-.287 2.153-.496 2.691a4.376 4.376 0 0 1-1.056 1.623 4.371 4.371 0 0 1-1.622 1.055c-.539.21-1.28.433-2.691.497-1.573.072-2.045.087-6.048.087s-4.475-.015-6.047-.087c-1.412-.064-2.153-.287-2.691-.496a4.376 4.376 0 0 1-1.623-1.056 4.371 4.371 0 0 1-1.055-1.622c-.21-.539-.433-1.28-.497-2.691C3.015 19.475 3 19.003 3 15s.015-4.475.087-6.047c.064-1.412.287-2.153.496-2.691a4.38 4.38 0 0 1 1.056-1.623A4.371 4.371 0 0 1 6.26 3.584c.539-.21 1.28-.433 2.691-.497C10.525 3.015 10.997 3 15 3s4.475.015 6.047.087c1.412.064 2.153.287 2.691.496a4.38 4.38 0 0 1 1.623 1.056c.493.493.8.963 1.055 1.622.21.539.433 1.28.497 2.691.072 1.573.087 2.045.087 6.048s-.015 4.475-.087 6.047zM15 7.175a7.825 7.825 0 1 0 0 15.65 7.825 7.825 0 0 0 0-15.65zm0 12.65c-2.66 0-4.825-2.164-4.825-4.825s2.164-4.825 4.825-4.825 4.825 2.164 4.825 4.825-2.164 4.825-4.825 4.825zm6.007-12.832a2 2 0 1 0 4 0 2 2 0 1 0-4 0']
            }
          },
          {
            label: 'YouTube',
            href: 'https://www.youtube.com/user/esritv',
            image: {
              viewBox: '0 0 310 310',
              path: ['M297.917 64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359 0-61.369 5.776-72.517 19.938C0 79.663 0 100.008 0 128.166v53.669c0 54.551 12.896 82.248 83.386 82.248h143.226c34.216 0 53.176-4.788 65.442-16.527C304.633 235.518 310 215.863 310 181.835v-53.669c0-29.695-.841-50.16-12.083-63.521zm-98.896 97.765l-65.038 33.991a9.997 9.997 0 0 1-14.632-8.863v-67.764a10 10 0 0 1 14.609-8.874l65.038 33.772a10 10 0 0 1 .023 17.738z']
            }
          },
          {
            label: 'GeoNet',
            href: 'https://geonet.esri.com/',
            image: {
              viewBox: '7 7 16 16',
              path: ['M23 19h-3v4l-4-4H7V9h16z']
            }
          }
        ]
      },
      info: {
        label: 'Additional Links',
        menu: [
          {
            label: 'Privacy',
            href: 'https://www.esri.com/legal/privacy'
          },
          {
            label: 'Legal',
            href: 'https://www.esri.com/legal'
          },
          {
            label: 'Site Map',
            href: 'http://www.esri.com/site-map'
          },
          {
            label: 'Terms and Conditions',
            href: 'https://www.esri.com/legal/software-license'
          },
          {
            label: 'Code of Business Conduct',
            href: 'https://www.esri.com/about-esri/code-of-conduct'
          }
        ]
      }
    }
  };

  esriGlobalNav.create({headerElm: '.esri-header-barrier', footerElm: '.esri-footer-barrier', menuData});
})();



