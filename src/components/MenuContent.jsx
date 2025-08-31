import {CurrencyDollarIcon, CurrencyRupeeIcon, HeartIcon} from "@heroicons/react/24/solid"


function MenuContent(){

    return(
        <>
            <div className="bg-linear-to-r/hsl from-amber-800 to-black-100 text-amber-50 m-0.5 p-2 rounded-2xl">

                <div className="lg:flex lg:flex-row">
                    <div className="lg:basis-180 text-center p-4">
                        <h1 className="text-4xl lg:text-5xl">Speacial For You.</h1>
                        <br />
                        <p>"Life begins after coffee."</p>
                        <br />
                        <p>"Coffee — because adulting is hard."</p>
                        <p> "Coffee is the foundation of my food pyramid."</p>
                        <br />
                        <button className="bg-amber-700 shadow-lg shadow-amber-700/50"> Check Menu </button>
                        <div className="flex justify-center p-1">
                            <div>
                                <CurrencyDollarIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CurrencyRupeeIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <HeartIcon className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </div>
                
                    <div className="lg:basis-120 lg:w-120">
                        <img src='/ContentPhotos/Coffee.jpg' className="rounded-3xl" alt="Coffee Powder" srcset="" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* Second Frame here------> */}

                <div className="lg:flex lg:flex-row">

                    <div className="lg:basis-120 lg:w-120">

                        <img src='/ContentPhotos/CoffeeCon1.jpg' className="rounded-3xl" alt="Coffee Powder" srcset="" />

                    </div>

                    <div className="lg:basis-180 text-center p-4">

                        <h1 className="text-4xl lg:text-5xl">Blog Coffee</h1>
                        <br />
                        <div className="px-3">
                            <p>Coffee contains caffeine, a natural stimulant that boosts alertness and improves focus. Studies show that moderate coffee consumption can enhance memory, support heart health, and even reduce the risk of certain diseases like Parkinson’s and Type 2 diabetes.</p>
                        </div>
                        
                        <br />
                        <button className="bg-amber-700 shadow-lg shadow-amber-700/50"> Read Blog </button>
                        {/* <div className="flex justify-center p-1">
                            <div>
                                <CurrencyDollarIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CurrencyRupeeIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <HeartIcon className="h-6 w-6 text-white" />
                            </div>
                        </div> */}
                    </div>
                
                </div>  
                <br />
                <br />

                {/* Third Frame here------> */}
                <div className="lg:flex lg:flex-row">

                    <div className="lg:basis-180 text-center p-4">

                        <h1 className="text-4xl lg:text-5xl">Coffee Ingredients.</h1>
                        <br />
                        <div>
                            <ul class="list-decimal list-inside marker:text-amber-700 marker:font-bold">
                               <div>
                                    <li>Coffee Beans – Roasted and ground seeds from the Coffea plant.</li>
                                </div>
                                <br />

                                <div>
                                    <li>Water – Hot water is essential to extract the flavor from the coffee grounds.</li>
                                </div>
                                <br />

                                <div>
                                    <li>Milk (optional) – Used in lattes, cappuccinos, or filter coffee.</li>
                                </div>
                                <br />

                                <div>
                                    <li>Sugar or Sweeteners (optional) – To balance bitterness.</li>
                                </div>
                                <br />
                            </ul>
                        </div>
                        <br />
                        <button className="bg-amber-700 shadow-lg shadow-amber-700/50"> Check More </button>
                        {/* <div className="flex justify-center p-1">
                            <div>
                                <CurrencyDollarIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <CurrencyRupeeIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <HeartIcon className="h-6 w-6 text-white" />
                            </div>
                        </div> */}
                    </div>

                    <div className="lg:basis-120 lg:w-120">

                        <img src='/ContentPhotos/CoffeeCon1.jpg' className="rounded-3xl" alt="Coffee Powder" srcset="" />

                    </div>
                
                </div> 
                
            </div>
        </>
    )
}

export default MenuContent;