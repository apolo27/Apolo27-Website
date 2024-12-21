'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';
import KeyVisual from './components/KeyVisual/KeyVisual';
import Earth from './pages/Earth/Earth';
import { AnimatePresence } from 'framer-motion';

import Mars from './pages/Mars/Mars';
import Mercury from './pages/Mercury/Mercury';
import Venus from './pages/Venus/Venus';
import Jupiter from './pages/Jupiter/Jupiter';
import Saturn from './pages/Saturn/Saturn';
import Uranus from './pages/Uranus/Uranus';
import Neptune from './pages/Neptune/Neptune';

function SponsorUs() {
  const pathname = usePathname();
  const [activePlanet, setActivePlanet] = useState('/');

  useEffect(() => {
    setActivePlanet(pathname);
  }, [pathname]);

  return (
    <Provider>
      <Wrapper>
        <AnimatePresence>
          {pathname === '/earth' && <Earth />}
          {pathname === '/mars' && <Mars />}
          {pathname === '/mercury' && <Mercury />}
          {pathname === '/venus' && <Venus />}
          {pathname === '/jupiter' && <Jupiter />}
          {pathname === '/saturn' && <Saturn />}
          {pathname === '/uranus' && <Uranus />}
          {pathname === '/neptune' && <Neptune />}
          {pathname === '/' && <KeyVisual activePlanet={activePlanet} />}
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
}

export default SponsorUs;
