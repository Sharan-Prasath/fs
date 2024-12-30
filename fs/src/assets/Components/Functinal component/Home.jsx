import "../../css/Navbar.css";
var Home=()=>{
    var styling ={
        frontSize:"30px",
        textDecoration:"underline",
        color:"blue",
    }
    return (
    <header>
        <h1 style = {styling} >This is navbar </h1>
        <h2 id='idSEg'>Testing Styling</h2>
        <p className='box-model'>Hello</p>
    </header>
    )
}
export default Home;