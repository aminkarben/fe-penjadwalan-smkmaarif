import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-darkblue flex items-center justify-between md:px-[65px] py-2">
      <div className="flex items-center">
        <Link
          to={"/"}
          className="btn btn-ghost text-md md:text-xl text-white mr-2"
        >
          <img src="/logo_smk_maarif.png" alt="logo" className="w-9" />
        </Link>
      </div>

      <div className="flex space-x-2 text-white text-md md:text-lg">
        <Link to="/class">
          <a href="#" className="hover:underline">
            Mata Pelajaran
          </a>
        </Link>

        <Link to="/tugas">
          <a href="#" className="hover:underline">
            Tugas
          </a>
        </Link>

        <Link to="/jadwal">
          <a href="#" className="hover:underline">
            Jadwal
          </a>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <img src="/icon/fi_log-in.svg" alt="time icon" className="w-5 h-5" />
        <button className="text-white font-bold text-[17px]">Masuk</button>
      </div>
    </div>
  );
};

export default Navbar;
