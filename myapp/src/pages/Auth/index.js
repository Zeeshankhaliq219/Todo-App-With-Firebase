import React from 'react'
import Login from './Login';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../../components/PageNotFound';

export default function index() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
