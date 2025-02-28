import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";
import HomeIcon from './components/icon/icon-collections/HomeIcon.tsx'
import TransferIcon from './components/icon/icon-collections/TransferIcon.tsx'
import UserIcon from './components/icon/icon-collections/UserIcon.tsx'
import InvestmentIcon from './components/icon/icon-collections/InvestmentIcon.tsx'
import CreditCardIcon from './components/icon/icon-collections/CreditCardIcon.tsx'
import LoanIcon from './components/icon/icon-collections/LoanIcon.tsx'
import ServiceIcon from './components/icon/icon-collections/ServiceIcon.tsx'
import EconometricIcon from './components/icon/icon-collections/EconometricIcon.tsx'
import SettingIcon from './components/icon/icon-collections/SettingIcon.tsx'
import SideMenu from './components/menus/SideMenu.tsx'
import NotFoundPage from "./pages/NotFoundPage.tsx";

const DashboardPage = lazy(() => import('./pages/dashboard/index'));
const SettingPage = lazy(() => import('./pages/settings/index'));
const ProfileTab = lazy(() => import('./pages/settings/profile'));
const PreferenceTab = lazy(() => import('./pages/settings/preference'));
const SecurityTab = lazy(() => import('./pages/settings/security'));

const menus = [
  {
    'icon': HomeIcon,
    'label': 'Dashboard',
    'path': ['/'],
  },
  {
    'icon': TransferIcon,
    'label': 'Transactions',
    'path': ['/transactions'],
  },
  {
    'icon': UserIcon,
    'label': 'Accounts',
    'path': ['/accounts'],
  },
  {
    'icon': InvestmentIcon,
    'label': 'Investments',
    'path': ['/investments'],
  },
  {
    'icon': CreditCardIcon,
    'label': 'Credit Cards',
    'path': ['/credit-cards'],
  },
  {
    'icon': LoanIcon,
    'label': 'Loans',
    'path': ['/loans'],
  },
  {
    'icon': ServiceIcon,
    'label': 'Services',
    'path': ['/serices'],
  },
  {
    'icon': EconometricIcon,
    'label': 'My Privileges',
    'path': ['/my-previleges'],
  },
  {
    'icon': SettingIcon,
    'label': 'Setting',
    'path': ['/setting', '/setting/preference', '/setting/security'],
  }
];

function App() {
  const [menuSelected, setMenuSelected] = useState<number>(0);

  return (
    <SideMenu className={''} menus={menus}
      menuSelected={menuSelected}
      OnMenuSelected={(menu: number) => {
        setMenuSelected(menu);
      }}
    >
      <div className="mt-header-mobile md:mt-header ml-0 md:ml-sidebar">
        <div className="px-10 py-7-5">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<DashboardPage/>}/>
              <Route path="/setting" element={<SettingPage/>}>
                  <Route path=""  element={<ProfileTab/>}/>
                  <Route path="/setting/preference" element={<PreferenceTab/>}/>
                  <Route path="/setting/security" element={<SecurityTab/>}/>
              </Route>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
    </SideMenu>
  )
}

export default App
