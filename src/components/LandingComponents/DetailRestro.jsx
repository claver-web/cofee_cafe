
const EmployIntro = [
  {
    name: "Kartik Mehra",
    paragraph: "Welcome to Coffee Cafe. We are a passionate team of professionals dedicated to providing you with the best service and experience. Our employees are here to ensure that every interaction is meaningful and every product or service you receive exceeds expectations.",
    img: "/owner/MaleEmploy.webp"
  },
  {
    name: "Gulabo Ji",
    paragraph: "Welcome to Coffee Cafe. We are a passionate team of professionals dedicated to providing you with the best service and experience. Our employees are here to ensure that every interaction is meaningful and every product or service you receive exceeds expectations.",
    img: "/owner/femaleEmploy.webp"
  }
]

const DetailRestro = () => {


    return(
        <>
        <br />
        <div className="bg-gradient-to-r from-amber-900 to-gray-900 rounded-2xl">
          <br />
          <h1 className="font-bold text-3xl lg:text-4xl text-white-700 text-center">Welcome Coffee Cafe's Founders.</h1>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 p-7">
              <div className="flex-1 max-w-sm overflow-hidden shadow-lg">

                <img className="rounded-full shadow-2xl" loading="lazy" src="/owner/CEO.jpeg" alt="CEO of Coffee Cafe" />
                <br />

                <div className="font-bold text-3xl  text-center">CEO Of Coffee Cafe</div>
                <h2 className="font-bold text-2xl  text-center">Sonia Devi</h2>

                <div className="p-2">
                  <p className=" text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>

              </div>

              <div className="flex-1 content-start flex-wrap rounded-2xl scroll-auto">

                {EmployIntro.map((items, index) => (

                
                <div className="w-1/1 shadow-lg p-3" key={index}>

                  <div className="lg:flex gap-4">

                    <div className="">
                      <img src={items.img} loading="lazy" className="rounded-2xl" alt="" />
                    </div>

                    <div className="text-center p-2">
                      <h2 className="font-bold text-3xl">{items.name}</h2>
                      <p>
                        {items.paragraph}
                      </p>
                    </div>

                  </div>

                </div>

                ))}

              </div>
          </div>
        </div>
        
        </>
    )
}

export default DetailRestro;