
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const RecentWorkouts = () => {
  const workouts = [
    {
      id: 1,
      name: 'Morning Run',
      type: 'Cardio',
      duration: '45 minutes',
      date: 'Today',
      intensity: 'Moderate'
    },
    {
      id: 2,
      name: 'Upper Body',
      type: 'Strength',
      duration: '50 minutes',
      date: 'Yesterday',
      intensity: 'High'
    },
    {
      id: 3,
      name: 'Yoga Flow',
      type: 'Flexibility',
      duration: '30 minutes',
      date: '2 days ago',
      intensity: 'Low'
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Low': return 'bg-blue-100 text-blue-800';
      case 'Moderate': return 'bg-blue-100 text-blue-800';
      case 'High': return 'bg-rose-100 text-rose-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Cardio': return '🏃';
      case 'Strength': return '💪';
      case 'Flexibility': return '🧘';
      default: return '🏋️';
    }
  };

  return (
    <Card className="animate-scale-in">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Recent Workouts</span>
          <span className="text-sm font-normal text-fitness-primary cursor-pointer">View All</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workouts.map(workout => (
            <div key={workout.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer hover-scale">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fitness-light flex items-center justify-center mr-3">
                    <span className="text-lg">{getTypeIcon(workout.type)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{workout.name}</h3>
                    <p className="text-xs text-muted-foreground">{workout.date} • {workout.duration}</p>
                  </div>
                </div>
                <Badge className={getIntensityColor(workout.intensity)}>{workout.intensity}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
