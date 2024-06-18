export interface UserProps {
  data: {
    studentId?: string;
    teacherId?:  string;
    adminId?: string;
    name: string;
    email: string;
    userRole: "student" | "teacher" | "admin";
  };
}

export interface AuthOptions {
  name: string;
  userId: string;
  userRole: "student" | "teacher" | "admin";
}