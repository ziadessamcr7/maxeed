import { useTranslation } from 'react-i18next';
import './AboutUs.css'

const AboutUs = () => {

    const arrayOfArticles = [
        {
            imgUrl: '/assets/imgs/Vector.svg',
            title: 'Premium Quality',
            desc: 'We export fresh, high-quality agricultural products that meet international standards.',
        },
        {
            imgUrl: '/assets/imgs/codicon_workspace-trusted.svg',
            title: 'Certified & Reliable',
            desc: 'Our products are Global GAP, ISO, and HACCP certified for quality assurance.',
        },
        {
            imgUrl: '/assets/imgs/fluent_premium-28-filled.svg',
            title: 'Efficient Logistics',
            desc: 'Fast and secure global shipping ensures timely delivery.',
        },
        {
            imgUrl: '/assets/imgs/mdi_truck-fast-outline.svg',
            title: 'Trusted Experience',
            desc: 'With 17+ years in the industry, we are a leading name in agricultural exports.',
        },
    ]

    const { t, i18n } = useTranslation();


    return (
        <>
            <section
                style={{
                    fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Poppins", serif',
                    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',


                }}
                className='aboutUs'>
                <header className='d-flex justify-content-center align-items-center'>
                    <h1 className='text-white'> {t("aboutUs")} </h1>
                </header>

                <section className='exporting'>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div>
                                    <h1
                                        style={{
                                            fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif',


                                        }}
                                    >
                                        {t("aboutUsTitle")}

                                    </h1>
                                    <p
                                        style={{
                                            fontFamily: i18n.language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif',


                                        }}
                                    >
                                        {t("aboutUsDesc")}
                                    </p>

                                    <div className='btnBox d-flex mt-4'>
                                        <button className='btn px-4 py-2 text-white me-4'>
                                            {t("contactUs")}

                                            {
                                                i18n.language === "ar" ?
                                                    <i className="fa-solid fa-chevron-left me-2"
                                                        style={{
                                                            color: '#fff'
                                                        }}
                                                    ></i> : <i className="fa-solid fa-chevron-right"
                                                        style={{
                                                            color: '#fff'
                                                        }}
                                                    ></i>
                                            }


                                        </button>

                                        <button
                                            style={{
                                                margin: i18n.language === 'ar' ? '0 15px' : '0',
                                            }}
                                            className='btn'>


                                            Our Products

                                            {
                                                i18n.language === "ar" ?
                                                    <i className="fa-solid fa-chevron-left  me-2"
                                                        style={{
                                                            color: 'rgba(96, 213, 66, 1)'
                                                        }}
                                                    ></i> : <i className="fa-solid fa-chevron-right"
                                                        style={{
                                                            color: 'rgba(96, 213, 66, 1)'
                                                        }}
                                                    ></i>
                                            }





                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 align-self-end">
                                <div className='imgWrapper position-relative'>
                                    <img className='d-block m-auto' src="/assets/imgs/Ellipse 1.svg" alt="" />

                                    <div
                                        style={{
                                            right: i18n.language === 'ar' ? '27%' : '3.5%',
                                            left: i18n.language === 'ar' ? 'unset' : 'unset',
                                        }}
                                        className={`greenBrdrCirlce`} ></div>

                                    <div
                                        style={{
                                            left: i18n.language === 'ar' ? '3%' : 'unset',
                                            right: i18n.language === 'ar' ? 'unset' : '2.8%',
                                        }}
                                        className={`greenFilledCirlce ${i18n.language === 'ar' ? 'customizedFilledCirlceArabic' : 'customizedFilledCirlceEnglish'} `} ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='whyChooseUs'>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div>
                                    <h1>
                                        {t("whyChooseUs")}
                                    </h1>

                                    <p>
                                        {t("whyChooseUsDesc")}
                                    </p>
                                    <div className='mb-5'>
                                        <img src="/assets/imgs/Rectangle 160.svg" className='w-75 d-block' alt="" />

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div>

                                    {
                                        arrayOfArticles.map((item, idx) => {
                                            return <article key={idx} className='iconWrapper d-flex align-items-center mb-4 mb-lg-5'>
                                                <div
                                                    style={{
                                                        marginLeft: i18n.language === 'ar' ? '20px' : '0',

                                                    }}
                                                >
                                                    <img className='me-3 rounded-4' src={item.imgUrl} alt="" />

                                                </div>

                                                <div className=''>

                                                    <h5 className='mb-2'> {item.title} </h5>
                                                    <p className='mb-0'> {item.desc} </p>
                                                </div>
                                            </article>
                                        })
                                    }


                                </div>
                            </div>




                        </div>

                        <div className="row text-center my-0 my-lg-5 py-5 footer">
                            <div className="col-lg-4">
                                <div>
                                    <h1>10k</h1>
                                    <h3>
                                        {t("Trusted_People")}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <h1>1528</h1>
                                    <h3>
                                        {t("type_of_crops")}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <h1>16k</h1>
                                    <h3>
                                        {t("Export_process")}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}

export default AboutUs