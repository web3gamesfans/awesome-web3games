import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Second = () => {
    const { t } = useTranslation('second-page')
    return (
        <>
            <main>
                <Link href='/'>
                    <button
                        type='button'
                    >
                        {t('back-to-home')}
                    </button>
                </Link>
            </main>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['second-page', 'footer']),
    },
})

export default Second
