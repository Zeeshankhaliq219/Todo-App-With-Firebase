import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PageNotFound from '../../components/PageNotFound';
import AddData from './AddData';

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddata" element={<AddData />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}
