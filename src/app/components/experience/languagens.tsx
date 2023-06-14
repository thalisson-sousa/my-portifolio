import Image from "next/image";

interface LanguageProps {
    src: string,
    alt: string,
    time: string,
    measure: string
}

export function Language({src, alt, measure, time} : LanguageProps) {
  return (
    <div className="experience-language">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority
      />
      <div className="experience-unit">
        <div className={`experience-measure ${measure}`}>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
