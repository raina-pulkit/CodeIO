import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const Dashboard = () => {
  const user = useAuthUser();
  console.log("User: ", user);
  
  return <div>This is dashboard</div>;
};

export default Dashboard;
