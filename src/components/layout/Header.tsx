import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import { useBrand } from '../../contexts/BrandContext';
import { HiMenu, HiX } from 'react-icons/hi';
import React, { useState } from 'react';
import { MdHome, MdTour, MdLocalTaxi, MdEmail } from 'react-icons/md';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brandSettings } = useBrand();

  return (
    <header className="sticky py-6 top-0 z-50 h-8 border-b border-orange-200/40 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300/80">
      <div className="section-shell flex h-full items-center justify-between !py-0">
        <Link to="/#top" className="group flex items-center gap-3">
          <div className="grid h-5 w-5 place-items-center text-xs rounded-full bg-gradient-to-br from-yellow-300 to-orange-500">
            🍹
          </div>
          <h1 className="hidden text-xl font-tropical font-bold text-slate-900 transition group-hover:text-orange-700 sm:block">
            {brandSettings.brandName}
          </h1>
        </Link>

        <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
         <nav
            className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-2 px-3 py-2 bg-gradient-to-r from-orange-400/80 via-yellow-400/75 to-orange-300/80 shadow-none border-0 md:static md:flex md:flex-row md:items-center md:gap-4 md:p-0`}
          >
          <Link to="/#top" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-medium text-slate-800 hover:text-orange-700 transition-colors">
            <MdHome />
            <FormattedMessage id="nav.home" />
          </Link>
          <Link to="/tours#top" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-medium text-slate-800 hover:text-orange-700 transition-colors">
            <MdTour />
            <FormattedMessage id="nav.tours" />
          </Link>
          <Link to="/transport#top" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-medium text-slate-800 hover:text-orange-700 transition-colors">
            <MdLocalTaxi />
            <FormattedMessage id="nav.transport" defaultMessage="Transport" />
          </Link>
          <Link to="/contact#top" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-medium text-slate-800 hover:text-orange-700 transition-colors">
            <MdEmail />
            <FormattedMessage id="nav.contact" />
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
