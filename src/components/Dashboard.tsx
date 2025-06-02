
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { StatsCards } from './StatsCards';
import { RecentWorkouts } from './RecentWorkouts';
import { GoalProgress } from './GoalProgress';

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl font-bold gradient-text">Welcome back, Alex!</h1>
        <p className="text-lg text-muted-foreground">Ready to crush your fitness goals today?</p>
        <Button className="bg-gradient-fitness hover:opacity-90 transition-opacity hover-scale">
          Log New Workout
        </Button>
      </div>

      {/* Stats Overview */}
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Goal Progress */}
        <GoalProgress />
        
        {/* Recent Workouts */}
        <RecentWorkouts />
      </div>

      {/* Quick Actions */}
      <Card className="animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 hover-scale">
              <span className="text-2xl">💪</span>
              <span className="text-sm">Strength</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover-scale">
              <span className="text-2xl">🏃</span>
              <span className="text-sm">Cardio</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover-scale">
              <span className="text-2xl">🧘</span>
              <span className="text-sm">Yoga</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 hover-scale">
              <span className="text-2xl">🏊</span>
              <span className="text-sm">Swimming</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
