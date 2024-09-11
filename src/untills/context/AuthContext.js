import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Trạng thái người dùng

  const login = (userData) => {
    setUser(userData); // Lưu thông tin người dùng khi đăng nhập
  };

  const logout = () => {
    setUser(null); // Đặt lại trạng thái người dùng khi đăng xuất
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// import  { createContext } from "react";

// export const AuthContext = createContext({
//   user: undefined,
//   updateAuthUser: () => {},
//   //signOut: () => {}, 
// });

