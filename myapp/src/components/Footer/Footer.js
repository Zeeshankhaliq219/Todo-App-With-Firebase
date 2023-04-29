import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="container-fluide bg-primary">
        <p className="py-2 mb-0 fw-bold fs-6 text-center text-white">
          &copy; All Rights Reserved {year}
          <span className=" ms-2">DEVELOPED BY ZEESHAN KHALIQ</span>
        </p>
      </div>
    </>
  );
}
