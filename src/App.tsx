import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext'
import { InfoModuleContextProvider } from './context/InfoModuleContext'
import { HeaderMenuContextProvider } from './context/MenuContext'
import { SkeletonContextProvider } from './context/SkeletonContext'
import {
  Header,
  SignUp,
  SignIn,
  Feed,
  CreateProfile,
  Write,
  LoadingSpinner,
  User,
  Article,
  Profile,
} from './files'
import { ToastOptions } from './styles/theme'

export function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <SkeletonContextProvider>
          <HeaderMenuContextProvider>
            <Header />
          </HeaderMenuContextProvider>
          <LoadingSpinner />
          <Toaster
            position="top-center"
            toastOptions={ToastOptions}
            data-cy="toast-message"
          />
          <InfoModuleContextProvider>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/my-profile" element={<User />} />
              <Route path="/profile/:profileID" element={<Profile />} />
              <Route path="/create/post" element={<Write />} />
              <Route path="/onboard/profile" element={<CreateProfile />} />
              <Route path="/article/:id" element={<Article />} />
            </Routes>
          </InfoModuleContextProvider>
        </SkeletonContextProvider>
      </AuthContextProvider>
    </div>
  )
}
