import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import WhatsAppButton from '../components/layout/WhatsAppButton.jsx'
import ScrollProgress from '../components/layout/ScrollProgress.jsx'
import AdPopup from '../components/common/AdPopup.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'
import IdeaButton from "../components/layout/IdeaButton.jsx";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <AdPopup />
      <Footer />
      <WhatsAppButton />
      <IdeaButton />
      <AdPopup />
    </>
  );
}
