// components/Card.jsx
import React from 'react';

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children }) => (
    <div className="px-6 py-4 border-b">
        {children}
    </div>
);

export const CardTitle = ({ children, className = "" }) => (
    <h2 className={`text-xl font-semibold ${className}`}>
        {children}
    </h2>
);

export const CardContent = ({ children }) => (
    <div className="p-6">
        {children}
    </div>
);