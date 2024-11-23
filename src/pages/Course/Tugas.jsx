import { Link } from "react-router-dom";

const Tugas = () => {
  // Data tugas
  const tasks = [
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
    },
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
    },
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
    },
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
    },
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
    },
    {
      title: "Tugas PAI BAB 2",
      subject: "Pendidikan Agama Islam",
      createdDate: "Kamis, 16 Oktober 2024",
      dueDate: "Kamis, 24 Oktober 2024",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tugas</h1>
        <div className="relative">
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src="/icon/search.svg" alt="Search" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-5 border border-gray-200"
          >
            <h2 className="text-lg font-bold mb-3">{task.title}</h2>
            <div className="flex items-center mb-3">
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                {task.subject}
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              Dibuat: <span className="font-semibold">{task.createdDate}</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Batas Pengumpulan:{" "}
              <span className="font-semibold">{task.dueDate}</span>
            </p>
            <Link
              to="/details"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tugas;
