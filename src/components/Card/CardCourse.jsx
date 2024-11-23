import { Link } from "react-router-dom";

const CardCourse = () => {
  // Data tugas
  const tasks = [
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
      icon: "📗",
    },
    {
      title: "Tugas PAI BAB 3",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 17 Oktober 2024",
      dueDate: "Kamis, 25 Oktober 2024",
      icon: "📗",
    },
  ];

  return (
    <div className="flex justify-center bg-white">
      <div className="flex w-full justify-center items-center max-w-[1060px] flex-col pt-[26px] pb-[14px] gap-5 container">
        {/* Header */}
        <div className="flex justify-between container px-6">
          <h2 className="text-xl font-bold">Tugas Mendatang</h2>
          <Link
            to="/tugas"
            className="font-extrabold text-xs max-w-fit text-darkblue"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap space-x-2 justify-center items-center ">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-3 mt-4 w-96"
            >
              <h2 className="text-lg font-bold mb-2">{task.title}</h2>
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                  {task.icon} {task.subject}
                </span>
              </div>
              <p className="text-gray-500 mb-1">
                Dibuat:{" "}
                <span className="font-semibold">{task.createdDate}</span>
              </p>
              <p className="text-gray-500 mb-4">
                Batas Pengumpulan:{" "}
                <span className="font-semibold">{task.dueDate}</span>
              </p>
              <Link
                to="/details"
                className="w-full text-white bg-purple-600 hover:bg-purple-700 font-bold py-2 rounded"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
