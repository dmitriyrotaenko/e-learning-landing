import '@/styles';

import { Head } from 'minista';
import Header from '@/layout/Header';
import PromoBanner from '@/layout/PromoBanner';

const Global = props => {

  const {
    title,
    children,
    url
  } = props;

  return (
    <>
      <Head>
        <title>Lorna | {title}</title>
        <meta property="description" content="description" />
        <script src="/src/main.js" type="module" />
      </Head>
      <div className="header-container">
        {/*<PromoBanner />*/}
        <Header url={url}/>
      </div>
      {/*<Content>*/}
      {/*  {children}*/}
      {/*</Content>*/}
      {/*<Footer />*/}
    </>
  );
};

export default Global;