import Image from "next/image";
export default function RemoteControlledTeam() {
  return (
    <div className="text-center pt-10">
      <p className="text-4xl font-bold text-white">Remote Controlled Team</p>
      <div className="h-fit justify-center w-full flex">
        <Image
          src={"/images/about-us/RCROVER.png"}
          width={1280}
          height={720}
          alt="Remote Controlled Team"
          className="py-10"
        />
        
          <div className="w-3 h-3 bg-white rounded-full absolute top-72 left-1/2"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute left-0"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute right-0"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute -bottom-40 left-[51.5%]"></div>
          <div className="w-3 h-3 bg-white rounded-full absolute bottom-0"></div>
      </div>
    </div>
  );
}
