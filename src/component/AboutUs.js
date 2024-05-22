import ahmed from "../assets/images/member1.jpg";
import aliaa from "../assets/images/aliaa.jpg";
import meosaad from "../assets/images/mosaad.jpg";
import sayed from "../assets/images/sayed.jpg";
import sabry from "../assets/images/sabry.jpg";
import ayten from "../assets/images/ayten.jpg";
import farag from "../assets/images/farag.jpg";
import samir from "../assets/images/samir.jpg";

const AboutUs = () => {
  return (
    <div className="about__us ">
      <div className="w-[90%] m-auto py-[4em] flex flex-col items-center justify-center gap-8">
        <p>we are a team from aite and this is our graduation project</p>
        <div className="flex items-center justify-center gap-8 [&>*:nth-child(even)]:mt-[25%]">
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={ahmed}
              alt="ahmed"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Ahmed Anter</p>
              <p>Group head</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={aliaa}
              alt="aliaa"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Aliaa Ali</p>
              <p>Group member</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={meosaad}
              alt="meosaad"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Mohamed mosaad</p>
              <p>Group member</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={sayed}
              alt="ahmed el-Sayed"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Ahmed el-Sayed</p>
              <p>Group member</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={sabry}
              alt="Mahmoud Sabry"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Mahmoud Sabry</p>
              <p>Group member</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={ayten}
              alt="ayten"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Ayten Ibrahem</p>
              <p>Group member</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={farag}
              alt="farag"
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Islam Farag</p>
              <p>Group member</p>
            </div>
          </div>
          <div className="  group relative flex items-center justify-center rounded-xl border border-blue-500 p-1">
            <img
              className="transition ease-in-out delay-150 duration-300 w-[10em] h-[10em] rounded-xl group-hover:opacity-20 group-hover:-translate-y-1  group-hover:scale-110 "
              src={samir}
              alt="ahmed samir "
            />
            <div className="transition ease-in-out delay-150 duration-300 absolute opacity-0 group-hover:opacity-100">
              <p>Ahmed Samir</p>
              <p>Group member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
