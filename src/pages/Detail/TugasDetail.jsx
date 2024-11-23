const TugasDetail = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen p-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-300 text-white rounded-lg p-6 shadow-md mb-6">
          <h1 className="text-2xl font-bold">Tugas PAI BAB 2</h1>
          <p className="text-sm mt-2">
            Dibuat: <span className="font-medium">Kamis, 16 Oktober 2024</span>
          </p>
          <p className="text-sm">
            Batas Pengumpulan:{" "}
            <span className="font-medium">Kamis, 24 Oktober 2024</span>
          </p>
        </div>

        {/* Deskripsi Tugas */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Deskripsi Tugas</h2>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur. Habitant aliquet eu eu nunc
            amet nam augue ornare elit. Vel consectetur urna amet volutpat. Orci
            non tincidunt pharetra imperdiet nec libero et malesuada. Egestas id
            ac auctor nulla libero arcu ultrices massa nisi.
          </p>
        </div>

        {/* Dokumen yang Dilampirkan */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Dokumen yang Dilampirkan</h2>
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
            <div>
              <p className="text-gray-700 text-sm font-medium">
                Ujian Biologi 7.docx
              </p>
              <p className="text-gray-500 text-xs">200 KB</p>
            </div>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
              Unduh Lampiran
            </button>
          </div>
        </div>

        {/* Upload Tugas */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Upload Tugas</h2>
          <p className="text-gray-700 text-sm mb-4">
            Lampirkan dokumen tugas yang telah kamu kerjakan
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input type="file" className="hidden" id="fileUpload" />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-blue-500 text-sm font-medium"
            >
              Click to upload or drag and drop
            </label>
            <p className="text-gray-500 text-xs mt-1">
              PDF, PNG, or JPG (max. size 1MB)
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
            Batal
          </button>
          <button className="px-6 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TugasDetail;
