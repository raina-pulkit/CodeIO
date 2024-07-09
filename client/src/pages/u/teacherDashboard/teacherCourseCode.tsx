import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate, useParams } from "react-router-dom";
import { AuthOptions } from "types";

const ClassTaught = () => {
	const navigate = useNavigate();
  const user: AuthOptions | null = useAuthUser();

  if(user?.userRole !== "teacher") navigate("/u");

	return (
		<div
			className="mb-4 py-5 px-10 bg-slate-600 rounded-lg hover:scale-95 active:scale-90 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center"
			onClick={() => navigate(`/u/22CS6PCML/score-update/1`)}
		>
			<span>CLASS SECTION</span>
			<span>(BRANCH NAME)</span>
		</div>
	);
};

const TeacherCourseCode = () => {
	const { courseCode } = useParams();
	console.log("Code is: ", courseCode);

	return (
		<div className="flex flex-wrap py-10 px-14 md:px-40 gap-10 justify-center items-center">
			<ClassTaught />
			<ClassTaught />
			<ClassTaught />
			<ClassTaught />
			<ClassTaught />
			<ClassTaught />
			<ClassTaught />
		</div>
	);
};

export default TeacherCourseCode;
