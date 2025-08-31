const Footer = () => {

    return(
        <>
            <div className="bg-linear-to-r/hsl from-amber-800 to-black-100 text-center p-3">
                <div className="lg:flex  lg:justify-around items-center">

                    <div className="flex items-center justify-center">
                        <img src="/logo/logo1.jpeg" className="w-30 rounded-full" alt="Restrorant logo" />
                    </div>
                    <br />

                    
                    <div className="">
                        <h3 className="font-bold">Cafe's</h3>
                        <p>Ingredians</p>
                        <p>Menu</p>
                        <p>Blogs</p>
                    </div>
                    <br />

                    <div className="">
                        <h3 className="font-bold">Contects</h3>
                        <p>Phone: +9198981-98981</p>
                        <p>Email: cafecoffee@gmail.com</p>
                        <address> Address:
                            Jawali
                            Himachal Pardesh, India
                        </address>
                    </div>
                    
                </div>
                <hr />
                <p>@2027 Reserved</p>
            </div>
        </>
    )
}

export default Footer;