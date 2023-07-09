
import { Route, Routes } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import Navbar from './Navbar';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import HomePage from './pages/HomePage';
import AllPictures from './pages/AllPictures';
import Favorites from './pages/Favorites';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/pictures" element={<AllPictures />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  )
}

export default App;