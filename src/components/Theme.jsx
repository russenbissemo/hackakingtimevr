
const Theme = ({image , title,setThemeSelected}) => {
  
  return (
    <button onClick={()=> setThemeSelected(title)}>{title}</button>
  )
}

export default Theme;