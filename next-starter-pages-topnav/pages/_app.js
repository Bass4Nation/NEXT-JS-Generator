import '../styles/globals.css'
import React from "react";
import TopNav from '../component/TopNav'
//TopNav from component folder is wrapped around all other pages
function MyApp({ Component, pageProps }) {

  return (
    <>
      <React.Fragment>
        {/* TopNav from components folder is used here to always stay on the top
        of the page.  */}
        <TopNav />
        <Component {...pageProps} />
      </React.Fragment>
    </>
  );
}

export default MyApp
