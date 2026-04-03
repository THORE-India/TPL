import { Trophy, Users, Target, Calendar, TrendingUp, Award, Star, Zap, BarChart3, MapPin, Video, UserCheck, Briefcase } from 'lucide-react';

// Calculate Competition Days
const startDate: Date = new Date('2025-07-01');
const today: Date = new Date();

// Avoid time-related issues
startDate.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);

const diffTime: number = today.getTime() - startDate.getTime();
const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));

export const TPL_DATA = {
  metrics: [
    { label: 'Total Seasons', value: '3', icon: Trophy },
    { label: 'Competition Days', value: `${diffDays}+`, icon: Calendar },
    { label: 'Participants', value: '75+', icon: Users },
    { label: 'Total Teams', value: '12', icon: Target },
    { label: 'Total Bookings', value: '225+', icon: Award },
    { label: 'Total Tokens', value: '275+', icon: Star },
    { label: 'Site Visits', value: '2250+', icon: MapPin },
    { label: 'Total VCs', value: '1100+', icon: Video },
    { label: 'Total F2Fs', value: '850+', icon: UserCheck },
    { label: 'Total OBMs', value: '200+', icon: Briefcase },
  ],
  teams: [
    {
      id: 'himanshu',
      name: 'Team Himanshu Kumar',
      leader: 'Himanshu Kumar',
      seasons: 3,
      wins: 1,
      rankings: ['2nd', '1st', '3rd'],
      notablePlayers: ['Rahul S.', 'Priya M.'],
      image: 'https://i.postimg.cc/NFh2x8h6/Himanshu-Kumar-Team-Season-2.webp',
    },
    {
      id: 'nayan',
      name: 'Team Nayan Thorat',
      leader: 'Nayan Thorat',
      seasons: 3,
      wins: 2,
      rankings: ['1st', '2nd', '1st'],
      notablePlayers: ['Amit K.', 'Sonal V.'],
      image: 'https://i.postimg.cc/zGdLQYmp/Nayan-Thorat-Team-Season-2.webp',
    },
    {
      id: 'omkar',
      name: 'Team Omkar Dhawale',
      leader: 'Omkar Dhawale',
      seasons: 3,
      wins: 0,
      rankings: ['4th', '3rd', '2nd'],
      notablePlayers: ['Kiran P.', 'Deepak R.'],
      image: 'https://i.postimg.cc/1Rp8Qqh3/Omkar-Dhawale-Team-Season-2-(2).webp',
    },
    {
      id: 'pintu',
      name: 'Team Pintu Singh',
      leader: 'Pintu Singh',
      seasons: 2,
      wins: 0,
      rankings: ['5th', '4th'],
      notablePlayers: ['Vikram S.', 'Anjali T.'],
      image: 'https://i.postimg.cc/MK6pJ3Yn/Akshay-Marathe-Team-Season-2.webp',
    },
    {
      id: 'ahsan',
      name: 'Team Ahsan Khan',
      leader: 'Ahsan Khan',
      seasons: 3,
      wins: 0,
      rankings: ['3rd', '5th', '4th'],
      notablePlayers: ['Zaid M.', 'Farah K.'],
      image: 'https://i.postimg.cc/7hxwDb0g/Ahsan-Khan-Team-Season-2.webp',
    },
    {
      id: 'krishna',
      name: 'Team Krishna Kumar',
      leader: 'Krishna Kumar',
      seasons: 3,
      wins: 0,
      rankings: ['6th', '6th', '5th'],
      notablePlayers: ['Gopal V.', 'Radha S.'],
      image: 'https://i.postimg.cc/jd2G4dcT/Team-Akshay-marathe.png',
    },
    {
      id: 'akhilesh',
      name: 'Team Akhilesh Pandey',
      leader: 'Akhilesh Pandey',
      seasons: 2,
      wins: 0,
      rankings: ['7th', '7th'],
      notablePlayers: ['Manoj K.', 'Suresh P.'],
      image: 'https://i.postimg.cc/85Xtk0rK/Akhilesh-Pandey-Team-Season-2-(1).webp',
    },
    {
      id: 'onkar-p',
      name: 'Team Onkar Patil',
      leader: 'Onkar Patil',
      seasons: 3,
      wins: 0,
      rankings: ['8th', '8th', '6th'],
      notablePlayers: ['Tanmay P.', 'Sneha L.'],
      image: 'https://i.postimg.cc/NfHpYbG3/Onkar-Patil-Team-Season-2.webp',
    },
    {
      id: 'amit',
      name: 'Team Amit Wadkar',
      leader: 'Amit Wadkar',
      seasons: 2,
      wins: 0,
      rankings: ['9th', '9th'],
      notablePlayers: ['Rohan W.', 'Neha G.'],
      image: 'https://i.postimg.cc/76hnRnQ5/Amit-Wadkar-Team-Season-2.webp',
    },
    {
      id: 'hardik',
      name: 'Team Hardik Mehta',
      leader: 'Hardik Mehta',
      seasons: 3,
      wins: 0,
      rankings: ['10th', '10th', '7th'],
      notablePlayers: ['Jatin M.', 'Esha D.'],
      image: 'https://i.postimg.cc/YSqPpgsw/Hardik-mehta-season-2.webp',
    },
  ],
  wallOfFame: [
    {
      season: 'Season 1',
      winners: ['Rohit Patil', 'Nayan Thorat', 'Renuka Bhandare'],
      teamWinner: 'Team Nayan Thorat',
    },
    {
      season: 'Season 2',
      winners: ['Nayan Thorat', 'Akash Deshbratar', 'Harjot Saini'],
      teamWinner: 'Team Nayan Thorat',
    },
    {
      season: 'Season 3',
      status: 'Coming Soon',
      winners: [],
    },
  ],
  gallery: [
    'https://i.postimg.cc/KjTJPqhP/20251015-DSC-5315-new.jpg',
    'https://i.imgur.com/z4xHI1l.jpeg',
    'https://i.postimg.cc/qMbfnL68/20251015-DSC-4794.webp',
    'https://i.postimg.cc/6QZFkxjH/20251015-DSC-4691.webp',
    'https://i.postimg.cc/J4JJHTFm/IMG20250722110214.jpg',
    'https://i.postimg.cc/pTbMrL5W/20251015-DSC-4864.webp',
    'https://i.postimg.cc/bvSLvjsP/20250805-1154-Thore-Trophy-Arrival-remix-01k1webccbe7y99g6k4kqswwnq.png',
  ],
};
