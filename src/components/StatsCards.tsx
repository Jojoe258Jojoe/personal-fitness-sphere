
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="hover-scale animate-fade-in [animation-delay:100ms]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Workouts This Week</p>
              <p className="text-3xl font-bold text-fitness-primary">5</p>
            </div>
            <div className="w-12 h-12 bg-fitness-light rounded-full flex items-center justify-center">
              <span className="text-xl">🏋️</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-fitness-success">+2 from last week</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-scale animate-fade-in [animation-delay:200ms]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Minutes</p>
              <p className="text-3xl font-bold text-fitness-primary">280</p>
            </div>
            <div className="w-12 h-12 bg-fitness-light rounded-full flex items-center justify-center">
              <span className="text-xl">⏱️</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-fitness-success">+45 from last week</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-scale animate-fade-in [animation-delay:300ms]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Goal Progress</p>
              <p className="text-3xl font-bold text-fitness-primary">72%</p>
            </div>
            <div className="w-12 h-12 bg-fitness-light rounded-full flex items-center justify-center">
              <span className="text-xl">🎯</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-fitness-success">+12% from last week</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-scale animate-fade-in [animation-delay:400ms]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
              <p className="text-3xl font-bold text-fitness-primary">8</p>
            </div>
            <div className="w-12 h-12 bg-fitness-light rounded-full flex items-center justify-center">
              <span className="text-xl">🔥</span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-fitness-success">Best: 12 days</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
