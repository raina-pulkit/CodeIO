import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
import { AuthOptions } from "types";
import StudentDashboard from "./studentDashboard";
import TeacherDashboard from "./teacherDashboard";
import AdminDashboard from "./adminDashboard";

const Dashboard = () => {
  const user: AuthOptions | null = useAuthUser();
  const navigate = useNavigate();
  console.log("User: ", user);
  if (!user) navigate("/login");
  const { userRole } = user as AuthOptions;

  if (userRole === "student") return <StudentDashboard />;
  else if (userRole === "teacher") return <TeacherDashboard />;
  else return <AdminDashboard />;
};

export default Dashboard;
