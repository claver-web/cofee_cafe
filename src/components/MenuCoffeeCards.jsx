const menuItems = [
  { title: "Espresso", image: "/menuPhotos/coffee/coffe1.jpeg" },
  { title: "Iced Coffee", image: "/menuPhotos/coffee/coffe2.jpeg" },
  { title: "Macchiato", image: "/menuPhotos/coffee/coffe3.jpeg" },
  { title: "Cream Coffee", image: "/menuPhotos/coffee/coffe4.jpeg" },
  { title: "Chocolate Coffee", image: "/menuPhotos/coffee/coffe5.jpeg" },
  { title: "Blend Coffee", image: "/menuPhotos/coffee/coffe6.jpeg" },
  { title: "Decaf Coffee", image: "/menuPhotos/coffee/coffe7.jpeg" },
  { title: "Latte", image: "/menuPhotos/coffee/coffe8.jpeg" }
];

export default function MenuCardCollection() {
  return (
    <>

    <div className="w-full overflow-x-auto lg:overflow-x-hidden p-1 text-amber-50">

      <div className="flex gap-3 lg:gap-7 lg:p-4">

        {menuItems.map((item, index) => (

          <div
            key={index}
            className="min-w-[150px] sm:min-w-[200px] bg-linear-to-r/hsl from-amber-800 to-black-100 shadow rounded-2xl hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-t-xl"
            />
            <div className="p-2 text-center">
              <h4 className="font-medium text-white-800">{item.title}</h4>
            </div>
          </div>

        ))}

      </div>

    </div>
    
    </>
  );
}

