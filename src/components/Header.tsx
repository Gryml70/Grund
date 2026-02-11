import { Link, useLocation } from 'react-router-dom';
import signInIcon from '../assets/images/Sign in symbol.svg';

function Header() {
  const location = useLocation();

  const menuItems = [
    { id: 'butik', label: 'Butik', path: '/butik' },
    { id: 'sida', label: 'Sida', path: '/sida' },
    { id: 'kontakt', label: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <div className="w-full p-8 inline-flex justify-start items-center gap-6 flex-wrap content-center overflow-hidden">
      <div className="flex-1 h-11 justify-start text-black text-5xl font-semibold font-['Inter'] leading-10">
        LOGOTYP
      </div>
      <div className="flex justify-end items-start gap-2 flex-wrap content-start">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="p-2 flex flex-col justify-center items-center gap-1 bg-transparent"
          >
            <div className="justify-center text-gray-800 text-base font-normal font-['Inter'] leading-4">
              {item.label}
            </div>
            {location.pathname === item.path && (
              <div className="w-full h-[1px] bg-black" />
            )}
          </Link>
        ))}
      </div>
      <div className="px-5 py-2 flex justify-start items-center gap-2.5 overflow-hidden">
        <Link to="/user" className="bg-transparent">
          <img
            src={signInIcon}
            alt="Sign in"
            className="w-6 h-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;