import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PageNotFound from '../../components/PageNotFound';

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}
