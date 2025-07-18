import React from 'react';

const colorMap = {
  success: 'bg-green-50 border-green-400 text-green-800',
  error: 'bg-red-50 border-red-400 text-red-800',
  warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
  info: 'bg-blue-50 border-blue-400 text-blue-800',
};

export const Alert = ({ type = 'info', children, className = '' }) => (
  <div className={`border-l-4 p-4 mb-4 rounded-md ${colorMap[type]} ${className}`}>
    {children}
  </div>
);