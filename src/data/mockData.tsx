
import { Exercise, Goal, Workout } from '@/types';

export const mockExercises: Exercise[] = [
  {
    id: 1,
    name: 'Push-ups',
    type: 'Strength',
    muscle: 'Chest, Triceps',
    equipment: 'None',
    difficulty: 'Beginner',
    instructions: 'Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.'
  },
  {
    id: 2,
    name: 'Running',
    type: 'Cardio',
    equipment: 'None',
    difficulty: 'Beginner',
    instructions: 'Start at a comfortable pace and gradually increase speed. Maintain proper posture with shoulders relaxed.'
  },
  {
    id: 3,
    name: 'Squats',
    type: 'Strength',
    muscle: 'Quadriceps, Glutes',
    equipment: 'None',
    difficulty: 'Beginner',
    instructions: 'Stand with feet shoulder-width apart. Lower your body as if sitting in a chair, keeping knees behind toes.'
  },
  {
    id: 4,
    name: 'Plank',
    type: 'Strength',
    muscle: 'Core',
    equipment: 'None',
    difficulty: 'Beginner',
    instructions: 'Hold a push-up position with your weight on your forearms. Keep your body in a straight line.'
  },
  {
    id: 5,
    name: 'Yoga Flow',
    type: 'Flexibility',
    equipment: 'Yoga Mat',
    difficulty: 'Intermediate',
    instructions: 'A sequence of poses that smoothly flow from one to another in conjunction with breath.'
  },
  {
    id: 6,
    name: 'Cycling',
    type: 'Cardio',
    equipment: 'Bicycle/Stationary Bike',
    difficulty: 'Beginner',
    instructions: 'Maintain a steady cadence with proper seat height. Keep your back straight and engage your core.'
  },
  {
    id: 7,
    name: 'Deadlifts',
    type: 'Strength',
    muscle: 'Back, Hamstrings',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    instructions: 'Stand with feet hip-width apart, grip barbell, and lift by driving hips forward while keeping back straight.'
  },
  {
    id: 8,
    name: 'Swimming',
    type: 'Cardio',
    equipment: 'Pool',
    difficulty: 'Intermediate',
    instructions: 'Use proper swimming techniques for your chosen stroke. Focus on breathing patterns and efficient movement.'
  },
];

export const mockWorkouts: Workout[] = [
  {
    id: 1,
    name: 'Morning Run',
    date: '2025-06-02',
    duration: '45 minutes',
    type: 'Cardio',
    intensity: 'Moderate',
    notes: 'Felt great today, increased pace in the last 10 minutes'
  },
  {
    id: 2,
    name: 'Upper Body Strength',
    date: '2025-06-01',
    duration: '50 minutes',
    type: 'Strength',
    intensity: 'High',
    notes: 'Increased weights on bench press, feeling stronger!'
  },
  {
    id: 3,
    name: 'Yoga Flow',
    date: '2025-05-31',
    duration: '30 minutes',
    type: 'Flexibility',
    intensity: 'Low',
    notes: 'Morning yoga session, focused on deep stretching'
  },
  {
    id: 4,
    name: 'HIIT Workout',
    date: '2025-05-29',
    duration: '35 minutes',
    type: 'Cardio',
    intensity: 'High',
    notes: '30 seconds on, 15 seconds rest. Tough but effective!'
  },
  {
    id: 5,
    name: 'Leg Day',
    date: '2025-05-28',
    duration: '60 minutes',
    type: 'Strength',
    intensity: 'High',
    notes: 'Focus on squats and deadlifts. Increased weight.'
  }
];

export const mockGoals: Goal[] = [
  {
    id: 1,
    title: 'Weekly Workouts',
    type: 'Frequency',
    target: 7,
    current: 5,
    unit: 'workouts',
    deadline: '2025-06-07',
    completed: false
  },
  {
    id: 2,
    title: 'Monthly Cardio',
    type: 'Duration',
    target: 12,
    current: 8,
    unit: 'hours',
    deadline: '2025-06-30',
    completed: false
  },
  {
    id: 3,
    title: 'Strength Training',
    type: 'Frequency',
    target: 4,
    current: 3,
    unit: 'sessions',
    deadline: '2025-06-07',
    completed: false
  },
  {
    id: 4,
    title: 'Run 100km',
    type: 'Distance',
    target: 100,
    current: 42,
    unit: 'km',
    deadline: '2025-06-30',
    completed: false
  }
];
