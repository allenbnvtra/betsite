import React from "react";

const AddPlayerModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Add Player</h2>

        {/* Add your form fields here */}
      </div>
    </div>
  );
};

export default AddPlayerModal;
