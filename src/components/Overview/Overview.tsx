import Image from 'next/image';
export default function Overview() {
    return (
        <div className="overview">
            <div className="container">
                <div className="overview__image">
                    <Image
                        src={'/static/assets/images/Overview.svg'}
                        alt="Overview to Covid 19"
                        width={1177}
                        height={812}
                    />
                </div>
                <div className="overview__text"></div>
            </div>
        </div>
    );
}
