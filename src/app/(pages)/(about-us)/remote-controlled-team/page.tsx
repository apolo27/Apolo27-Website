import Image from "next/image"
export default function RemoteControlledTeam() {
    return (
        <div className="h-screen w-full ">
            <Image 
                src={"/images/about-us/RCROVER.png"}
                alt="Remote Controlled Rover"
                width={1920}
                height={1080}
            />
        </div>
    )
}