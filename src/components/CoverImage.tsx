interface CoverImageProps {
    path: string;
}

export default function CoverImage({path}: CoverImageProps) {
    return(
        <img src={path} alt="" className="w-screen h-[600px] object-cover max-md:h-[200px]"/>
    )
}