// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'student' | 'mentor' | 'admin';
  country: string;
  timezone: string;
  specialization?: string[];
  currentLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  joinedAt: Date;
  lastActive: Date;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  specialization: string;
  duration: number; // in weeks
  level: 'beginner' | 'intermediate' | 'advanced';
  modules: Module[];
  price: number;
  thumbnail: string;
  instructor: Instructor;
  aiToolsUsed: string[];
  learningOutcomes: string[];
  prerequisites: string[];
  enrollmentCount: number;
  rating: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  duration: number; // in minutes
  prerequisites: string[];
  learningObjectives: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  type: 'video' | 'text' | 'interactive' | 'assignment' | 'quiz';
  content: string; // URL for video, text content, or interactive content
  duration: number; // in minutes
  order: number;
  aiToolDemos: AIToolDemo[];
  resources: Resource[];
  isCompleted?: boolean;
}

export interface AIToolDemo {
  id: string;
  tool: string;
  description: string;
  videoUrl?: string;
  interactiveUrl?: string;
  practiceExercise?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'link' | 'template' | 'tool';
  url: string;
  description?: string;
}

// Learning Progress Types
export interface UserProgress {
  userId: string;
  courseId: string;
  completedModules: string[];
  completedLessons: string[];
  currentModule: string;
  currentLesson: string;
  progressPercentage: number;
  timeSpent: number; // in minutes
  lastAccessed: Date;
  certificates: Certificate[];
  assignments: Assignment[];
}

export interface Certificate {
  id: string;
  courseId: string;
  userId: string;
  issuedAt: Date;
  certificateUrl: string;
  skills: string[];
}

export interface Assignment {
  id: string;
  lessonId: string;
  userId: string;
  title: string;
  description: string;
  submissionUrl?: string;
  feedback?: string;
  grade?: number;
  status: 'pending' | 'submitted' | 'graded' | 'revision_needed';
  submittedAt?: Date;
  gradedAt?: Date;
}

// Community Types
export interface CommunityPost {
  id: string;
  authorId: string;
  author: User;
  title: string;
  content: string;
  category: 'discussion' | 'help' | 'showcase' | 'networking';
  tags: string[];
  likes: number;
  replies: Reply[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Reply {
  id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

// Instructor Types
export interface Instructor {
  id: string;
  user: User;
  bio: string;
  specializations: string[];
  experience: string;
  coursesTaught: string[];
  rating: number;
  totalStudents: number;
  linkedinUrl?: string;
  websiteUrl?: string;
}

// Job Matching Types
export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  preferredSkills: string[];
  aiToolsRequired: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
  isRemote: boolean;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  postedAt: Date;
  expiresAt: Date;
  matchScore?: number;
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  specialization: string[];
  currentLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Store Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterForm) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export interface CourseState {
  courses: Course[];
  currentCourse: Course | null;
  userProgress: Record<string, UserProgress>;
  isLoading: boolean;
  fetchCourses: () => Promise<void>;
  enrollInCourse: (courseId: string) => Promise<void>;
  updateProgress: (courseId: string, lessonId: string) => Promise<void>;
}