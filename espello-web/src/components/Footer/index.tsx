import './index.css'

const Footer = () =>{

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
            <div className='footer-right' onClick={openMail}>
            {mail}
            </div>
        </div>
    );
}

export default Footer;