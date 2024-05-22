import './index.css'

const Footer = () => {

    const mail = 'espello.ai@outlook.com'

    function openMail() {
        const recipient = mail;
        const subject = 'Your Subject';
        const body = 'Your Body';
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <div className="footer">
            <div className='footer-left'>
                Copyright © 2024 Espello
            </div>
            <div className='footer-center'>
                <div className='footer-center-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.1693 23.4661C20.3155 23.9569 34.5309 25.3128 35.8448 15.1716C37.452 2.76584 26.29 0.00341797 17.3114 0.00341797C8.33279 0.00341797 -0.61944 2.96675 0.0336947 15.1716C0.396983 21.9603 3.59122 31.1993 15.4163 31.6754C21.7118 31.9288 31.372 28.4351 31.372 27.3899C31.372 25.7146 29.783 25.8373 26.8677 26.0624C24.928 26.2121 22.4011 26.4072 19.3644 26.1481C16.1838 25.8768 13.3231 24.0306 13.3231 23.4043C13.3231 23.29 14.0201 23.3565 15.1693 23.4661ZM16.7574 15.5737C18.314 15.2521 19.3712 14.0005 19.1187 12.778C18.8662 11.5556 17.3995 10.8252 15.8429 11.1468C14.2863 11.4684 13.2291 12.72 13.4816 13.9425C13.7341 15.1649 15.2008 15.8952 16.7574 15.5737Z" fill="#FF8371" />
                        <path d="M26.8048 25.2142C27.0083 24.8574 27.5238 24.8608 27.7227 25.2202L28.6981 26.9835C28.8929 27.3356 28.6365 27.7673 28.234 27.7647L26.2601 27.7517C25.8577 27.7491 25.6069 27.3141 25.8063 26.9645L26.8048 25.2142Z" fill="#FF8371" />
                    </svg>
                </div>
                <div className='footer-center-content'>Espello</div>
            </div>
            <div className='footer-right' onClick={openMail}>
                {mail}
            </div>
        </div>
    );
}

export default Footer;