
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const GoalProgress = () => {
  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Current Goals</span>
          <span className="text-sm font-normal text-fitness-primary cursor-pointer">View All</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Weekly Workouts</h3>
            <p className="text-sm font-medium">5/7</p>
          </div>
          <Progress value={71} className="h-2 bg-fitness-light" indicatorClassName="bg-fitness-primary" />
          <p className="text-xs text-muted-foreground mt-2">2 more workouts to go this week</p>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Monthly Cardio Goal</h3>
            <p className="text-sm font-medium">8/12 hours</p>
          </div>
          <Progress value={66} className="h-2 bg-fitness-light" indicatorClassName="bg-fitness-primary" />
          <p className="text-xs text-muted-foreground mt-2">4 more hours to reach your goal</p>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Strength Training</h3>
            <p className="text-sm font-medium">3/4 sessions</p>
          </div>
          <Progress value={75} className="h-2 bg-fitness-light" indicatorClassName="bg-fitness-primary" />
          <p className="text-xs text-muted-foreground mt-2">1 more session this week</p>
        </div>
      </CardContent>
    </Card>
  );
};
