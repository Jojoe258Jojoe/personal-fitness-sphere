
import React from 'react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-fitness rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <h1 className="text-xl font-bold gradient-text">FitSphere</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Dashboard
          </a>
          <a href="#exercises" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Exercises
          </a>
          <a href="#goals" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Goals
          </a>
          <a href="#reports" className="text-sm font-medium hover:text-fitness-primary transition-colors">
            Reports
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button className="bg-gradient-fitness hover:opacity-90 transition-opacity" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
