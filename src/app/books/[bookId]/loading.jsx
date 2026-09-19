import React from "react";

const BookDetailsLoading = () => {
  return (
    <div className="flex items-center justify-between h-screen w-screen bg-red-200">
      <div className="flex gap-3 items-center justify-center w-full">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </div>
  );
};

export default BookDetailsLoading;
