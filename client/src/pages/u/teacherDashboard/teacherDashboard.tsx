import { useNavigate } from "react-router-dom";

const CourseCode = () => {
  const navigate = useNavigate();
	return (
		<div className="mb-4 py-5 px-10 bg-slate-600 rounded-lg hover:scale-95 active:scale-90 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center" onClick={() => navigate(`/u/22CS148`)}>
			<span>22CS2PCSEO</span>
      <span>(COURSE NAME)</span>
		</div>
	);
};

const TeacherDashboard = () => {
	return (
		<div className="flex flex-wrap py-10 px-14 md:px-40 gap-10 justify-center items-center">
			<CourseCode />
			<CourseCode />
			<CourseCode />
			<CourseCode />
			<CourseCode />
			<CourseCode />
			<CourseCode />
		</div>
	);
};

export default TeacherDashboard;
