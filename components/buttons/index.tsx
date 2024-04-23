
interface ButtonOrangeProps {
    style?: any,
    svg?: any,
    color?: any,
    title: any,
}

interface ButtonWhiteOrangeBorderProps {
    style?: any,
    svg?: any,
    color?: any,
    title: any,
}

interface ButtonWhiteOrangeBorderProps {
    style?: any,
    svg?: any,
    color?: any,
    title: any,
}


interface ButtonProfileCategoryProps {
    title: any,
    massegeCount?: number,
    onClick?:any,
    active: string,
    url:string
}

export const ButtonOrange = ({ title, color, svg, style }: ButtonOrangeProps) => {
    return <button style={{ color: color, ...style }} className="orange_button font_16">{title} {svg}</button>
}

export const ButtonWhiteOrangeBorder = ({ title, color, svg, style }: ButtonWhiteOrangeBorderProps) => {
    return <button style={{ color: color, ...style, }} className="white_button_orange_border font_16">{title} {svg}</button>
}

export const ButtonYellowBlackBorder = ({ title, color, svg, style }: ButtonWhiteOrangeBorderProps) => {
    return <button style={{ color: color, ...style, }} className="yellow_button_black_border font_16">{title} {svg}</button>
}

export const ButtonOrangeBorder200 = ({ title, color, svg, style }: ButtonOrangeProps) => {
    return <button style={{ color: color, ...style }} className="orange_button_border_220 orange_button_border font_16">
            <span></span><span></span>
            {title} {svg} 
            <span></span><span></span> 
        </button>
}


export const ButtonOrangeBorder180 = ({ title, color, svg, style }: ButtonOrangeProps) => {
    return <button style={{ color: color, ...style }} className="orange_button_border_180 orange_button_border font_16">
            <span></span><span></span>
            {title} {svg} 
            <span></span><span></span> 
        </button>
}

export const ButtonGreyBorder = ({ title, color, svg, style }: ButtonOrangeProps) => {
    return <button style={{ color: color, ...style }} className="grey_button_border font_16">
            <span></span><span></span>
            {title} {svg} 
            <span></span><span></span> 
        </button>
}


export const ButtonProfileCategory =  ({ title, massegeCount, onClick, active, url }: ButtonProfileCategoryProps) => {
    return <button style={{color:url == active ? "#000": "rgba(32, 32, 32, 0.6)" }} onClick={onClick} className="button_grey_border font_20">
            {title}
            {massegeCount ? <span className="font_14">{massegeCount}</span> : ""}
        </button>
}