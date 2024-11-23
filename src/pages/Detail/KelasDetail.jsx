import { useState } from "react";

export default function KelasDetail() {
  const [activeTab, setActiveTab] = useState("Materi");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}

      {/* Card Header */}
      <div className="mt-6 p-6 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 rounded-lg text-white">
        <h1 className="text-xl font-bold">IPS</h1>
        <p>Guru : Saekhu, S.Pd</p>
        <p>Jumlah Siswa : 36</p>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="flex space-x-8 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "Materi"
                ? "border-b-2 border-purple-600 text-purple-600"
                : ""
            }`}
            onClick={() => setActiveTab("Materi")}
          >
            Materi{" "}
            <span className="text-sm bg-gray-200 rounded-full px-2 py-1">
              4
            </span>
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "Tugas"
                ? "border-b-2 border-purple-600 text-purple-600"
                : ""
            }`}
            onClick={() => setActiveTab("Tugas")}
          >
            Tugas{" "}
            <span className="text-sm bg-gray-200 rounded-full px-2 py-1">
              2
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === "Materi" && (
            <>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="p-4 bg-white shadow rounded-lg">
                  <h2 className="text-lg font-bold">
                    Mempelajari Makhluk Hidup
                  </h2>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </p>
                  <div className="mt-4">
                    <button className="text-purple-600 flex items-center space-x-2">
                      <span>PDF</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4 4m0 0l4-4m-4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
          {activeTab === "Tugas" && (
            <div className="text-center text-gray-500">
              Belum ada tugas tersedia.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
