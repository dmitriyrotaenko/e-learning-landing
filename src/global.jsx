import '@/styles';

import { Head } from "minista"
import Header from "@/layout/Header";
import PromoBanner from "@/layout/PromoBanner";

export default props => {

  const {
    title,
    children
  } = props;


  return (
    <>
      <Head>
        <title>Lorna | {title}</title>
        <meta property="description" content="description" />
      </Head>
      <div className="header-container">
        <PromoBanner />
        <Header />
      </div>
      {/*<Content>*/}
      {/*  {children}*/}
      {/*</Content>*/}
      {/*<Footer />*/}
    </>
  )
}