import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image src="/images/loader.svg" width="200" height="200" alt="Loader" />
    </div>
  );
};

export default loading;
