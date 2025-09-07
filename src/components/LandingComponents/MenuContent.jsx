import { CurrencyDollarIcon, CurrencyRupeeIcon, HeartIcon } from "@heroicons/react/24/solid";

function MenuContent() {
  return (
    <div className="bg-gradient-to-r from-amber-900 to-gray-900 text-amber-50 p-6 rounded-2xl">
      
      {/* First Frame */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Special For You</h1>
          <p className="text-lg italic mb-2">"Life begins after coffee."</p>
          <p className="text-lg italic mb-2">"Coffee — because adulting is hard."</p>
          <p className="text-lg italic mb-6">"Coffee is the foundation of my food pyramid."</p>
          
          <button className="px-6 py-3 bg-amber-700 rounded-lg shadow-lg shadow-amber-700/40 hover:bg-amber-800 transition">
            Check Menu
          </button>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <CurrencyDollarIcon className="h-6 w-6 text-white" />
            <CurrencyRupeeIcon className="h-6 w-6 text-white" />
            <HeartIcon className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <img
            loading="lazy"
            src="/ContentPhotos/Coffee.webp"
            className="rounded-3xl w-full object-cover shadow-lg"
            alt="Coffee"
          />
        </div>
      </div>

      {/* Second Frame */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <img
            loading="lazy"
            src="/ContentPhotos/CoffeeCon1.webp"
            className="rounded-3xl w-full object-cover shadow-lg"
            alt="Coffee Cup"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Blog Coffee</h1>
          <p className="text-lg leading-relaxed mb-6 px-2 lg:px-0">
            Coffee contains caffeine, a natural stimulant that boosts alertness and improves
            focus. Studies show that moderate coffee consumption can enhance memory,
            support heart health, and even reduce the risk of certain diseases like
            Parkinson’s and Type 2 diabetes.
          </p>
          <button className="px-6 py-3 bg-amber-700 rounded-lg shadow-lg shadow-amber-700/40 hover:bg-amber-800 transition">
            Read Blog
          </button>
        </div>
      </div>

      {/* Third Frame */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Coffee Ingredients</h1>
          <ul className="list-decimal list-inside space-y-4 text-lg leading-relaxed marker:text-amber-500 marker:font-bold">
            <li>Coffee Beans – Roasted and ground seeds from the Coffea plant.</li>
            <li>Water – Hot water is essential to extract the flavor from the coffee grounds.</li>
            <li>Milk (optional) – Used in lattes, cappuccinos, or filter coffee.</li>
            <li>Sugar or Sweeteners (optional) – To balance bitterness.</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-amber-700 rounded-lg shadow-lg shadow-amber-700/40 hover:bg-amber-800 transition">
            Check More
          </button>
        </div>

        <div className="flex-1">
          <img
            loading="lazy"
            src="/ContentPhotos/CoffeeCon1.webp"
            className="rounded-3xl w-full object-cover shadow-lg"
            alt="Coffee Ingredients"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
