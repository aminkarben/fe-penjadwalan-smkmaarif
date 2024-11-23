import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Class = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements[0].value;
    navigate(`/class?name=${searchQuery}`);
  };

  // Data kelas
  const classes = [
    {
      date: "Rabu, 16 Oktober",
      time: "08:00–10:00",
      subject: "IPA",
      teacher: "Anwar Fuadi, S.Pd",
      students: 36,
      color: "bg-green-500",
    },
    {
      date: "Rabu, 16 Oktober",
      time: "10:30–12:00",
      subject: "Matematika",
      teacher: "Fitri Wulandari, M.Pd",
      students: 32,
      color: "bg-blue-500",
    },
    {
      date: "Kamis, 17 Oktober",
      time: "08:00–09:30",
      subject: "Bahasa Indonesia",
      teacher: "Siti Nurhaliza, S.Pd",
      students: 30,
      color: "bg-orange-500",
    },
    {
      date: "Kamis, 17 Oktober",
      time: "10:00–11:30",
      subject: "Bahasa Inggris",
      teacher: "John Doe, M.Ed",
      students: 28,
      color: "bg-red-500",
    },
    {
      date: "Jumat, 18 Oktober",
      time: "08:00–09:30",
      subject: "Sejarah",
      teacher: "Sri Hartati, M.Hum",
      students: 26,
      color: "bg-purple-500",
    },
    {
      date: "Jumat, 18 Oktober",
      time: "10:00–11:30",
      subject: "Pendidikan Kewarganegaraan",
      teacher: "Budi Santoso, S.Pd",
      students: 27,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-[#EBF3FC] min-h-screen">
      <div className="flex flex-col justify-center items-center w-full p-2 px-3 lg:px-0">
        {/* Header */}
        <div className="flex flex-grow justify-between items-center mt-[30px] w-full max-w-[1000px]">
          <h1 className="text-base lg:text-[24px] font-bold">Mata Pelajaran</h1>
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex flex-row"
          >
            <input
              type="search"
              placeholder="Cari Kelas"
              className="w-full outline-none focus:outline-none px-4 py-[6px] border-2 rounded-2xl border-darkblue"
            />
            <button
              type="submit"
              className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-lg bg-darkblue p-1"
            >
              <img src="/icon/search.svg" alt="search icon" />
            </button>
          </form>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md w-96 p-3 mt-4 py-2"
          >
            {/* Header */}
            <div className={`${classItem.color} text-white text-center py-4`}>
              <h2 className="text-lg font-bold">{classItem.date}</h2>
              <p className="text-sm">{classItem.time}</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{classItem.subject}</h3>
              <p className="text-gray-700 mb-1">
                Guru: <span className="font-semibold">{classItem.teacher}</span>
              </p>
              <p className="text-gray-700 mb-4">
                Jumlah Siswa:{" "}
                <span className="font-semibold">{classItem.students}</span>
              </p>
              <Link
                to="/detail"
                className="w-full text-white bg-purple-600 hover:bg-purple-700 font-bold py-2 rounded"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
