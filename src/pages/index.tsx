import type { NextPage } from 'next';
import Head from 'next/head';
import Home from "./home";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const IndexPage: NextPage = () => {
    const router = useRouter()
    const { t } = useTranslation('common')
    console.log(t('change-locale'))
    console.log(router.locale)
  return (
      <main>
        <div>
          <Head>
            <title>david</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
              <Home></Home>
        </div>
          {/*<Link*/}
          {/*    href='/'*/}
          {/*    locale={router.locale === 'en' ? 'de' : 'en'}*/}
          {/*>*/}
          {/*    <button>*/}
          {/*        {t('change-locale')}*/}
          {/*    </button>*/}
          {/*</Link>*/}
          {/*<Link href='/second'>*/}
          {/*    <button*/}
          {/*        type='button'*/}
          {/*    >*/}
          {/*        {t('to-second-page')}*/}
          {/*    </button>*/}
          {/*</Link>*/}
      </main>
  )
}

export default IndexPage

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer']),
    }
})
