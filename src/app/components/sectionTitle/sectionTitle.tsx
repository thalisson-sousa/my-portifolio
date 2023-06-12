import "./sectionTitle.scss"

interface SectionTitleProps {
    text: string
}

export default function SectionTitle({ text } : SectionTitleProps) {
    return (
        <h3 className="sectionTitle">{text}</h3>
    )
}