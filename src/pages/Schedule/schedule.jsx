import { useState } from "react";

function Schedule() {
  const [selectedSchedule, setSelectedSchedule] = useState("Jadwal");

  const handleScheduleChange = (event) => {
    setSelectedSchedule(event.target.value);
  };

  return (
    <div className="p-4">
      {/* Dropdown Menu */}
      <div className="mb-4">
        <select
          className="border border-gray-300 rounded p-2 w-full md:w-auto"
          value={selectedSchedule}
          onChange={handleScheduleChange}
        >
          <option value="Jadwal">Jadwal Mata Pelajaran</option>
          <option value="Ujian">Jadwal Ujian</option>
        </select>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Monday Column */}
        <div>
          <div className="text-center font-semibold text-white bg-blue-600 rounded-t-lg p-2">
            Senin
          </div>
          <div className="p-2 bg-blue-100 rounded-b-lg space-y-2">
            {selectedSchedule === "Jadwal" ? (
              // Content for "Jadwal Mata Pelajaran"
              <>
                <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                  <div className="font-bold">IPS</div>
                  <div>REK-303</div>
                  <div>Syaehu, S.Pd</div>
                  <div>09:00:00-10:00:00</div>
                </div>
                <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                  <div className="font-bold">IPS</div>
                  <div>REK-303</div>
                  <div>Syaehu, S.Pd</div>
                  <div>09:00:00-10:00:00</div>
                </div>
              </>
            ) : (
              // Content for "Jadwal Ujian"
              <>
                <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">UTS IPA</div>
                    <span className="text-xs bg-yellow-200 text-yellow-600 px-2 py-0.5 rounded-full">
                      UTS
                    </span>
                  </div>
                  <div>IPA</div>
                  <div>Syaehu, S.Pd</div>
                  <div>09:00:00-10:00:00</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tuesday Column */}
        <div>
          <div className="text-center font-semibold text-gray-800 bg-purple-100 rounded-t-lg p-2">
            Selasa
          </div>
          <div className="p-2 bg-gray-100 rounded-b-lg">
            {selectedSchedule === "Jadwal" ? (
              <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                <div className="font-bold">IPS</div>
                <div>REK-303</div>
                <div>Syaehu, S.Pd</div>
                <div>09:00:00-10:00:00</div>
              </div>
            ) : (
              <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold">UTS IPA</div>
                  <span className="text-xs bg-yellow-200 text-yellow-600 px-2 py-0.5 rounded-full">
                    UTS
                  </span>
                </div>
                <div>IPA</div>
                <div>Syaehu, S.Pd</div>
                <div>09:00:00-10:00:00</div>
              </div>
            )}
          </div>
        </div>

        {/* Wednesday Column */}
        <div>
          <div className="text-center font-semibold text-gray-800 bg-purple-100 rounded-t-lg p-2">
            Rabu
          </div>
          <div className="p-2 bg-gray-100 rounded-b-lg">
            {/* No content for Wednesday */}
          </div>
        </div>

        {/* Thursday Column */}
        <div>
          <div className="text-center font-semibold text-gray-800 bg-purple-100 rounded-t-lg p-2">
            Kamis
          </div>
          <div className="p-2 bg-gray-100 rounded-b-lg">
            {selectedSchedule === "Jadwal" ? (
              <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                <div className="font-bold">IPS</div>
                <div>REK-303</div>
                <div>Syaehu, S.Pd</div>
                <div>09:00:00-10:00:00</div>
              </div>
            ) : (
              <div className="bg-gray-200 p-3 rounded shadow space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold">UTS IPA</div>
                  <span className="text-xs bg-yellow-200 text-yellow-600 px-2 py-0.5 rounded-full">
                    UTS
                  </span>
                </div>
                <div>IPA</div>
                <div>Syaehu, S.Pd</div>
                <div>09:00:00-10:00:00</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
