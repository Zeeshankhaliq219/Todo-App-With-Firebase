import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontend from './Frontend'
import Auth from './Auth'
import PageNotFound from '../components/PageNotFound';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Index() {
  return (
      <BrowserRouter>
          <Header />
          <main >          
          <Routes>
              <Route path='/*' element={<Frontend />} />
              <Route path='/Auth*' element={<Auth />} />
              <Route path='*' element={<PageNotFound />} />
         </Routes>
          </main>
          <Footer />

    </BrowserRouter>
  )
}
