
interface AvatarProps {
    image_link?: string | undefined  // string because this is likely to be link of images hosted in cloud services
    alt: string
}


const Avatar = function({image_link, alt}: AvatarProps): React.JSX.Element { // returns a single jsx element
    
    return(
      
            <img className=" profile" src={image_link} alt={alt} />
       
    )
}



export default Avatar;