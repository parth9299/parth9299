import React from "react";

export default function Footer() {
  const getYear = new Date();
  const CurrYear = getYear.getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>
          © {CurrYear} Parth Patel. All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </>
  );
}
