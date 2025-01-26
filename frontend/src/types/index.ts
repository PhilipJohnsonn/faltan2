export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
}

export interface Match {
  id: string;
  date: string;
  location: string;
  participants: User[];
}

export interface Notification {
  id: string;
  message: string;
  timestamp: Date;
}