import React from "react";
import { Cat, Dog, FishSymbol, Heart, PawPrint, ShoppingBag, Pill } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Categories() {

  let navigate= useNavigate();

  const categoryCard = [
    {
      id: 1,
      name: "Pets Food",
      image: "https://media.istockphoto.com/id/518211348/photo/dog-and-cat-eating-natural-food-from-a-bowl.jpg?s=612x612&w=0&k=20&c=G3PxiUxuZKsRdgJey-bIetiaNaJVDDlHwVznSYVVu54=",
      description: "Healthy and tasty food for your pets",
      slug:'pets-food',
      icon: <ShoppingBag className="text-emerald-600" />
    },
    {
      id: 2,
      name: "Toys and Accessories",
      image: "https://www.patipets.com.au/cdn/shop/articles/What_To_Buy_New_Puppies_880x.png?v=1722391848",
      description: "Playful toys and stylish accessories",
      slug:'toys-accessories',
      icon: <PawPrint className="text-emerald-600" />
    },
    {
      id: 3,
      name: "Pets",
      image: "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg",
      description: "Find your perfect companion",
      slug:'pets',
      icon: <Dog className="text-emerald-600" />
    },
    {
      id: 4,
      name: "Health & Wellness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZS2HG1RPOrrj-HPswISmgnKr_drWX8MuRUw&s",
      description: "Supplements, medicines, and health care",
      slug:'health-wellness',
      icon: <Pill className="text-emerald-600" />
    },
    {
      id: 5,
      name: "Pets Clothing",
      image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Clothes and costumes for your pets",
      slug:'pets-clothing',
      icon: <Cat className="text-emerald-600" />
    },
    {
      id: 6,
      name: "Beds & Furniture",
      image: "https://cdn.tatlerasia.com/asiatatler/i/sg/2021/02/24152021-9-fun-and-functional-pet-furniture-to-keep-your-home-stylish-covo-2_cover_1500x1000.jpg",
      description: "Comfortable beds and pet furniture",
      slug:'beds-furniture',
      icon: <FishSymbol className="text-emerald-600" />
    }
  ];
 

  const handleButton=(slug)=>{
     if(slug==="pets"){
      navigate('/Pets')
     }
     else{
      navigate(`/Categories/${slug}`)
     }
  }



  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 font-['Pacifico']">
            Pet Categories
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Discover everything your pet needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryCard.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2">
                  <Heart 
                    size={24} 
                    className="text-white opacity-70 hover:text-red-500 hover:opacity-100 cursor-pointer transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 p-4 w-full">
                    <button className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-2 w-full rounded-md font-medium transition duration-300 hover:from-emerald-600 hover:to-teal-500"
                    onClick={()=>handleButton(category.slug)}
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}