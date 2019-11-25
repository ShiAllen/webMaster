module.exports = {

 title:"網站管理平台" ,
description: '國立勤益科技大學 資訊網站管理平台',


  themeConfig: {
 //   displayAllHeaders: true ,// Default: false
//  activeHeaderLinks: false,


    logo: '/assets/img/NCUT_LOGO.png',
    lastUpdated: true,

    nav: [
      { text: '勤益首頁', link: 'https://www.ncut.edu.tw/rpage.php' },
      { text: 'HOME', link: '/' },
      { text: '文件', link: '/guide/' },
      { text: '筆記', link: '/myNote/' }
    ],

    sidebar: 'auto',
    sidebarDepth: 2,
    sidebar: [
        "/" ,
        { title: '文件',
        collapsable: true,
        sidebarDepth: 3,    // optional, defaults to 1
         children:[
           ['/guide/page1','page1'],
           ['/guide/page2','page2'],
         ]

      },
      {
        title: '筆記',   // required
       // path: '/myNote/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
          ['/myNote/note1','note1'],
          ['/myNote/note2','note2'],
        ]
      } 


      
    ],

    header: {
      background: {
        //url: '/assets/img/header-image-01.jpg',
        url: '/assets/img/photo.jpg',
        // useGeo: true,
      },
      showTitle: true,
    },
 

  
  },
  

}