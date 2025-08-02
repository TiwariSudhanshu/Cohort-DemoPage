import Image from "next/image";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  position: string;
}

export default function ProfileCard({ imageSrc, name, position }: ProfileCardProps) {
  return (
    <div
      className="
        flex flex-col items-center justify-start
        border border-[#44116E]
        rounded-2xl overflow-hidden
        text-center bg-gradient-to-b from-[#240052] to-black
        transition-transform duration-300 hover:scale-105
        shadow-lg
        w-[310px] h-[433px]
      "
    >
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={name}
          width={310}
          height={280}
          className="object-cover w-full h-[280px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-4 flex-1 w-full">
        <h4 className="text-lg font-semibold text-white mb-1">{name}</h4>
        <p className="text-sm text-gray-400">{position}</p>
      </div>
    </div>
  );
}
