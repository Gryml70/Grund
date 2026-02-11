import logo from '../assets/images/Frame 10.png';
import messageIcon from '../assets/images/Message.svg';
import facebookIcon from '../assets/images/Shape.svg';
import instagramIcon from '../assets/images/16px-logo-instagram.svg';

function Footer() {
  return (
    <footer className="w-full bg-black inline-flex flex-col justify-start items-center py-14 gap-8">
      <div className="w-full flex justify-center items-start gap-24 flex-wrap">
        {/* Logotyp */}
        <img className="w-[470px] h-24" src={logo} alt="Logotyp" />
        
        {/* Kontakta oss */}
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-white text-xl font-semibold font-['Noto_Sans'] leading-7">
            Kontakta oss
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <img src={messageIcon} alt="Message" className="w-6 h-6" />
          </div>
        </div>
        
        {/* Sociala medier */}
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-white text-xl font-semibold font-['Inter'] leading-7">
            Sociala medier
          </div>
          <div className="flex justify-start items-start gap-2.5">
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="w-full flex justify-center items-center">
        <div className="text-center text-white text-sm font-medium font-['Roboto'] leading-5 tracking-tight">
          © 2026 Företaget. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}

export default Footer;