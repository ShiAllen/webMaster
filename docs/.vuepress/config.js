module.exports = { 
  base : '/a/webmaster/docs/',
    // D:\webs\http\a\webmaster\docs
    // https://xxx.xxx.xxx/a/webmaster/docs
 title:"網站管理平台Docs" ,
 description: '國立勤益科技大學 資訊網站管理平台',
  themeConfig: {
    //   displayAllHeaders: true ,// Default: false
   //  activeHeaderLinks: false,
   
   
       logo: '/assets/img/NCUT_LOGO.png',
       lastUpdated: true,
   
       nav: [
         { text: '勤益首頁', link: 'https://www.ncut.edu.tw/rpage.php' },
         { text: '主頁', link: '/' },
         { text: '文件', link: '/guide/' },
         { text: '資訊', link: '/info/' },
         { text: '應用', link: '/AP/' },
         { text: '記錄', link: '/myNote/' }
       ],


       sidebar: 'auto',
      
       sidebarDepth: 2,
      
       sidebar: [
           { title: '應用程式',
           collapsable: true,
           sidebarDepth: 3,    // optional, defaults to 1
            children:[
              ['/AP/prj001','SCOPUS論文發表平台'],
              ['/AP/prj001','招生招生考試時間表'],
              ['/AP/prj001','VR全景校園地圖'],
              ['/AP/prj001','校園地圖googleMap'],
              ['/AP/prj001','活動票選與有獎徵答程式'],
              ['/AP/prj001','電話分機表'],              
              ['/AP/prj001','英文網站管理平台'],                                                        
              ['/AP/prj001','最新訊息活動公告'],                                                        
              ['/AP/prj001','Banner公關圖檔'],                                                                                    
              ['/AP/prj001','徵人求才與校內工讀'],                                                                                    
              ['/AP/prj001','活動看版POST圖檔'],                                                                                    
              ['/AP/prj001','資訊公開專區'],                                                                                    
              ['/AP/prj001','新鮮人特區'],                                                                                    
              ['/AP/prj001','人事室檔案管理'],                                                                                    
              ['/AP/prj001','評鑑檔案管理平台'],                                                                                    
             
            ]
   
         },
                          
           { title: '資訊架構',
           collapsable: true,
           sidebarDepth: 3,    // optional, defaults to 1
            children:[
              ['/info/info0','網站導覽'],
              ['/info/info0','聯絡我們'],
              ['/info/info0','ENGLISH'],
              ['/info/info0','關於勤益'],
              ['/info/info0','院系簡介'],
              ['/info/info0','研究與產學'],
              ['/info/info0','招生訊息'],
              ['/info/info0','學生事務'],
              ['/info/info0','校友服務'],
              ['/info/info0','最新訊息'],
              ['/info/info0','活動與公告'],
              ['/info/info0','影音專區'],
              ['/info/info0','行事曆'],
              ['/info/info0','勤益特區'],
              ['/info/info0','聲明資訊'],
              ['/info/info0','交通資訊'],
            ]
   
         },
         {
           title: '記錄',   // required
          // path: '/myNote/',      // optional, which should be a absolute path.
           collapsable: true, // optional, defaults to true
           sidebarDepth: 3,    // optional, defaults to 1
           children: [
             ['/myNote/note1','VM主機'],
             ['/myNote/note2','代管網站'],
             ['/myNote/note1','https安全憑證'],
             ['/myNote/note1','無障礙檢測'],
             ['/myNote/note2','備份備援'],
             ['/myNote/note1','連絡窗口'],
             ['/myNote/note1','多媒體技術'],
             ['/myNote/note2','模組元件'],
             ['/myNote/note1','note1'],

           ]
         } 
         
   
         
       ], // end sidebar 
   
   
  }

}