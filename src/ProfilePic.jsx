
function ProfilePic() {

    const imageUrl = './src/assets/guy.png'
    const handleClick = (e) => e.target.style.display = 'none'
    
    return(<img onClick={(e) => handleClick()} src={imageUrl}></img>)
}



export default ProfilePic