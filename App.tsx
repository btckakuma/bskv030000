import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Education } from './pages/Education.tsx';
import { Merchants } from './pages/Merchants.tsx';
import { MerchantAcademy } from './pages/MerchantAcademy.tsx';
import { Events } from './pages/Events.tsx';
import { GetStarted } from './pages/GetStarted.tsx';
import { Contact } from './pages/Contact.tsx';
import { Donate } from './pages/Donate.tsx';
import { Blog } from './pages/Blog.tsx';
import { Community } from './pages/Community.tsx';
import { John316 } from './pages/John316.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="merchant-academy" element={<MerchantAcademy />} />
          <Route path="events" element={<Events />} />
          <Route path="community" element={<Community />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="contact" element={<Contact />} />
          <Route path="give" element={<Donate />} />
          <Route path="articles" element={<Blog />} />
          <Route path="john316" element={<John316 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;