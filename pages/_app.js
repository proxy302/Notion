import { useEffect } from 'react'

import 'animate.css'
import '@/styles/globals.css'
import '@/styles/nprogress.css'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import '@/styles/notion.css' //  重写部分样式

import { GlobalContextProvider } from '@/lib/global'

import { isMobile } from '@/lib/utils'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import smoothscroll from 'smoothscroll-polyfill'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'

// 自定义样式css和js引入
import ExternalScript from '@/components/ExternalScript'

// 各种扩展插件 动画等
const ExternalPlugins = dynamic(() => import('@/components/ExternalPlugins'))

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init()
    if (isMobile()) {
      smoothscroll.polyfill()
    }
  }, [])

  return (
    <>
      <Head>
        <script>
          {`var _paq = window._paq = window._paq || [];                                                                                                              
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */                                                                  
            _paq.push(['trackPageView']);                                                                                                                            
            _paq.push(['enableLinkTracking']);                                                                                                                       
            (function() {                                                                                                                                            
              var u="//matomo.proxy302.com/";                                                                                                                        
              _paq.push(['setTrackerUrl', u+'matomo.php']);                                                                                                          
              _paq.push(['setSiteId', '1']);                                                                                                                         
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];                                                                    
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);                                                                                     
            })();`}
        </script>
      </Head>
      <GlobalContextProvider>
        <Component {...pageProps} />
        <ExternalPlugins {...pageProps} />
        <ExternalScript />
      </GlobalContextProvider>
    </>
  )
}

export default MyApp
