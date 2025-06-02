
export interface Exercise {
  id: number;
  name: string;
  type: ExerciseType;
  muscle?: string;
  equipment?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  instructions?: string;
}

export type ExerciseType = 'Cardio' | 'Strength' | 'Flexibility' | 'Balance' | 'Sports' | 'Other';

export interface Workout {
  id: number;
  name: string;
  date: string;
  duration: string;
  type: ExerciseType;
  intensity: 'Low' | 'Moderate' | 'High';
  notes?: string;
  exercises?: WorkoutExercise[];
}

export interface WorkoutExercise {
  exerciseId: number;
  sets?: number;
  reps?: number;
  weight?: number;
  duration?: number;
  distance?: number;
}

export interface Goal {
  id: number;
  title: string;
  type: 'Frequency' | 'Duration' | 'Distance' | 'Weight' | 'Custom';
  target: number;
  current: number;
  unit: string;
  deadline?: string;
  completed: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  age?: number;
  height?: number;
  weight?: number;
  fitnessLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
  preferredWorkouts?: ExerciseType[];
  goals?: Goal[];
}
