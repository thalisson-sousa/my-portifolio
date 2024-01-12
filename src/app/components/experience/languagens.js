import Image from "next/image";

export function Language({src, alt, measure, time}) {
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
