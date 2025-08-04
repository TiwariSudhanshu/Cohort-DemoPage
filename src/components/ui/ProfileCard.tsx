import Image from "next/image";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  position: string;
  linkedinUrl: string;
}

export default function ProfileCard({ imageSrc, name, position, linkedinUrl }: ProfileCardProps) {
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
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src="/LinkedIn.png"
              alt="LinkedIn"
              width={16}
              height={16}
              className="hover:opacity-80"
            />
          </a>
        </div>
        <p className="text-sm text-gray-400">{position}</p>
      </div>
    </div>
  );
}
