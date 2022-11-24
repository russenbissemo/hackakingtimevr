
const Theme = ({image , title,setThemeSelected}) => {
  
  return (
    <div onClick={()=> setThemeSelected(title)} className={`period ${title}`} >
    <img src={image} alt={title} />
    </div>
  )
}

export default Theme;