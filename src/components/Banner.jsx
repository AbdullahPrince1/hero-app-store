import { Link } from "react-router";

export default function Banner() {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <div className="text-center">
          <h1 className="font-semibold text-[#001931] text-7xl">
            We Build <br />{" "}
            <span className="font-bold text-blue-600">Productive </span>Apps
          </h1>
          <p className="text-[#627382] mt-4">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex gap-6 my-10 ">
          <Link
            className="flex items-center gap-2 border border-[#D2D2D2] px-5 py-2 rounded"
            to="https://play.google.com/store/games?hl=en"
          >
            <img className="h-8" src="/google-play.png" alt="google play" />
            <h3 className="font-semibold text-xl text-[#001931]">
              Google Play
            </h3>
          </Link>
          <Link
            className="flex items-center gap-2 border border-[#D2D2D2] px-5 py-2 rounded"
            to="https://www.apple.com/app-store/"
          >
            <img className="h-8" src="/app-store.png" alt="app store" />
            <h3 className="font-semibold text-xl text-[#001931]">App Store</h3>
          </Link>
        </div>
        <figure>
          <img src="/hero.png" alt="" />
        </figure>
      </div>
    </>
  );
}
