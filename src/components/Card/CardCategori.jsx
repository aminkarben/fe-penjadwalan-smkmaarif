import { Link } from "react-router-dom";

const CardCategori = () => {
  // Data untuk setiap kartu
  const cards = [
    {
      title: "IPA",
      teacher: "Anwar Fuadi, S.Pd",
      schedule: "Hari Ini • 08.00–10.00",
      isActive: true, // Tombol aktif
    },
    {
      title: "IPA",
      teacher: "Anwar Fuadi, S.Pd",
      schedule: "Hari Ini • 08.00–10.00",
      isActive: false, // Tombol nonaktif
    },
    {
      title: "IPA",
      teacher: "Anwar Fuadi, S.Pd",
      schedule: "Hari Ini • 08.00–10.00",
      isActive: false, // Tombol nonaktif
    },
  ];

  return (
    <div className="flex justify-center bg-[#EBF3FC] py-6">
      <div className="flex flex-col items-center w-full p-4">
        {/* Header */}
        <div className="flex justify-between items-center w-full max-w-[1000px] mb-6">
          <h2 className="text-xl font-bold">Mapel Hari Ini</h2>
          <Link
            to="/class"
            className="font-extrabold text-xs text-darkblue hover:underline"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-full md:w-96 text-gray-800"
            >
              {/* Title */}
              <h2 className="text-lg font-bold mb-2">{card.title}</h2>
              {/* Teacher */}
              <div className="text-sm text-gray-500 mb-1">
                <span>{card.teacher}</span>
              </div>
              {/* Schedule */}
              <div className="text-sm text-gray-500 mb-4">
                <span>{card.schedule}</span>
              </div>
              {/* Button */}
              <Link
                to="/class"
                className={`w-full py-2 rounded-lg font-semibold transition duration-200 ${
                  card.isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-400 text-white hover:bg-blue-700"
                }`}
              >
                Ikuti Kelas
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCategori;
