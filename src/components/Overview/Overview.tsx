import Image from 'next/image';
export default function Overview() {
    return (
        <div className="overview">
            <div className="container">
                <div className="overview__wrapper py-10">
                    <div className="overview__text p-36">
                        <h3 className="primary-color font-bold">COVID-19 Alert</h3>
                        <h2 className="heading-color font-bold text-4xl mb-5">Stay at Home quarantine To stop Corona virus</h2>
                        <p className="text-base mb-5">
                            There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may
                            need supportive care to .
                        </p>
                        <button className='primary-background-color text-white rounded-full py-3 px-5 text-lg hover:bg-red-600'>Let Us Help</button>
                    </div>

                    <div className="overview__image">
                        <Image
                            src={'/static/assets/images/Overview.svg'}
                            alt="Overview to Covid 19"
                            width={1177}
                            height={812}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
