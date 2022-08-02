import wcs_logo from "../images/wcs_logo.png"

const Header = () => {
    return(
            <div>
                <div className={"flex flex-row justify-center bg-light-gray py-2"}>
                        <div className={"flex mx-2"}><img src={wcs_logo} alt={"Wild Code School logo"} className={"no-cover"}/></div>
                        <div className={"flexmx-2"}><h1>Les Argonautes</h1></div>
                </div>
            </div>
        )
}

export default Header;