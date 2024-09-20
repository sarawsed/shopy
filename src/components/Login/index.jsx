import React, { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa"; // آیکون‌های لاگین و لاگ‌اوت

const LoginModal = ({ isLoggedIn, username, handleLogin, handleLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({});

  // تابع برای باز و بسته کردن مدال
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // تابع برای بررسی صحت شماره موبایل
  const validateMobileNumber = (number) => {
    const mobileRegex = /^0\d{10}$/;
    return mobileRegex.test(number);
  };

  // تابع برای ارسال فرم و لاگین
  const handleSubmit = (e) => {
    e.preventDefault(); // جلوگیری از ریفرش شدن صفحه
    let formErrors = {};

    if (!inputUsername.trim()) {
      formErrors.username = "Username is required";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    if (!mobileNumber) {
      formErrors.mobile = "Mobile number is required";
    } else if (!validateMobileNumber(mobileNumber)) {
      formErrors.mobile = "Invalid mobile number. It should be 11 digits and start with 0";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      handleLogin(inputUsername);
      // بعد از لاگین شدن، ورودی‌ها را خالی می‌کنیم
      setInputUsername("");
      setPassword("");
      setMobileNumber("");
      setErrors({});
      setIsModalOpen(false); // بستن مدال بعد از موفقیت‌آمیز بودن لاگین
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="flex items-center space-x-2">
          <p className="text-yellow-300">Dear {username}</p>
          <FaSignOutAlt
            onClick={handleLogout}
            className="hover:text-yellow-300 cursor-pointer"
          />
        </div>
      ) : (
        <FaUser
          className="hover:text-yellow-300 cursor-pointer"
          onClick={toggleModal}
        />
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded shadow-lg w-80"> {/* تنظیم استایل مطابق هدر */}
            <h2 className="text-xl mb-4 text-white">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white">Username:</label>
                <input
                  type="text"
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                  className="w-full px-2 py-1 border rounded focus:outline-none bg-gray-700 text-white" // استایل فیلد ورودی
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-white">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-1 border rounded focus:outline-none bg-gray-700 text-white"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-white">Mobile Number:</label>
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-2 py-1 border rounded focus:outline-none bg-gray-700 text-white"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-300 hover:text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
