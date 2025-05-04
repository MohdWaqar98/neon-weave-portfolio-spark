
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-7xl font-bold gradient-text">404</h1>
          <p className="text-2xl text-gray-300 mb-6">Oops! Page not found</p>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple to-neon-blue py-3 px-6 rounded-full text-white font-medium hover:shadow-lg hover:shadow-neon-purple/20 transition-all hover-target"
          >
            <Home size={18} />
            Back to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
