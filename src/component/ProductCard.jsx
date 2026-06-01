import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const dairyProducts = [
  { id: "d1", name: "Amul Taaza Toned Milk", price: 27, mrp: 27, qty: "500 ml", image: "/public/slider image/image.png", deliveryTime: "7 mins" },
  { id: "d2", name: "Harvest Gold White Bread", price: 30, mrp: 35, qty: "400 g", image: "/public/slider image/image copy 2.png", deliveryTime: "8 mins" },
  { id: "d3", name: "Farm Fresh White Eggs", price: 65, mrp: 70, qty: "6 pcs", image: "/public/slider image/image copy 3.png", deliveryTime: "7 mins" },
  { id: "d4", name: "Amul Pasteurised Butter", price: 58, mrp: 60, qty: "100 g", image: "/public/slider image/image copy 4.png", deliveryTime: "9 mins" },
  { id: "d5", name: "Mother Dairy Paneer", price: 90, mrp: 95, qty: "200 g", image: "/public/slider image/image copy 5.png", deliveryTime: "8 mins" },
  { id: "d6", name: "Amul Cheese Slices", price: 130, mrp: 135, qty: "100 g", image: "/public/slider image/image copy 6.png", deliveryTime: "10 mins" },
  { id: "d7", name: "Amul Masti Spiced Buttermilk", price: 15, mrp: 15, qty: "200 ml", image: "/public/slider image/image copy 7.png", deliveryTime: "7 mins" },
  { id: "d8", name: "Mother Dairy Classic Curd", price: 35, mrp: 35, qty: "400 g", image: "/public/slider image/image copy 8.png", deliveryTime: "8 mins" },
  { id: "d9", name: "Britannia Brown Bread", price: 45, mrp: 50, qty: "400 g", image: "/public/slider image/image copy 9.png", deliveryTime: "9 mins" },
  { id: "d10", name: "Nestle A+ Slim Milk", price: 85, mrp: 90, qty: "1 L", image: "/public/slider image/image copy 10.png", deliveryTime: "8 mins" }
];

const snacksProducts = [
  { id: "s1", name: "Lay's India's Magic Masala", price: 20, mrp: 20, qty: "50 g", image: "/public/slider image/image copy 11.png", deliveryTime: "9 mins" },
  { id: "s2", name: "Haldiram's Bhujia Sev", price: 105, mrp: 110, qty: "400 g", image: "/public/slider image/image copy 12.png", deliveryTime: "10 mins" },
  { id: "s3", name: "Kurkure Masala Munch", price: 20, mrp: 20, qty: "85 g", image: "/public/slider image/image copy 13.png", deliveryTime: "9 mins" },
  { id: "s4", name: "Bingo Mad Angles Tomato", price: 20, mrp: 20, qty: "72 g", image: "/public/slider image/image copy 14.png", deliveryTime: "9 mins" },
  { id: "s5", name: "Pringles Original Chips", price: 110, mrp: 120, qty: "102 g", image: "/public/slider image/image copy 15.png", deliveryTime: "11 mins" },
  { id: "s6", name: "Britannia Good Day Cashew", price: 35, mrp: 40, qty: "200 g", image: "/public/slider image/image copy 16.png", deliveryTime: "8 mins" },
  { id: "s7", name: "Parle-G Original Biscuits", price: 10, mrp: 10, qty: "110 g", image: "/public/slider image/image copy 17.png", deliveryTime: "7 mins" },
  { id: "s8", name: "Act II Butter Popcorn", price: 60, mrp: 65, qty: "150 g", image: "/public/slider image/image copy 18.png", deliveryTime: "10 mins" },
  { id: "s9", name: "4700BC Gourmet Popcorn", price: 85, mrp: 99, qty: "75 g", image: "/public/slider image/image copy 19.png", deliveryTime: "12 mins" },
  { id: "s10", name: "Haldiram's Aloo Bhujia", price: 45, mrp: 50, qty: "150 g", image: "/public/slider image/image copy 20.png", deliveryTime: "9 mins" }
];

const beverageProducts = [
  { id: "b1", name: "Coca-Cola Soft Drink", price: 40, mrp: 40, qty: "750 ml", image: "/public/slider image/image copy 21.png", deliveryTime: "8 mins" },
  { id: "b2", name: "Sprite Lime Drink", price: 40, mrp: 40, qty: "750 ml", image: "/public/slider image/image copy 22.png", deliveryTime: "8 mins" },
  { id: "b3", name: "Thums Up Strong Taste", price: 40, mrp: 40, qty: "750 ml", image: "/public/slider image/image copy 23.png", deliveryTime: "8 mins" },
  { id: "b4", name: "Pepsi Cold Drink", price: 35, mrp: 35, qty: "600 ml", image: "/public/slider image/image copy 24.png", deliveryTime: "9 mins" },
  { id: "b5", name: "Red Bull Energy Drink", price: 125, mrp: 125, qty: "250 ml", image: "/public/slider image/image copy 25.png", deliveryTime: "7 mins" },
  { id: "b6", name: "Real Fruit Power Mixed Fruit", price: 110, mrp: 130, qty: "1 L", image: "/public/slider image/image copy 26.png", deliveryTime: "10 mins" },
  { id: "b7", name: "Maaza Mango Drink", price: 70, mrp: 75, qty: "1.2 L", image: "/public/slider image/image copy 27.png", deliveryTime: "9 mins" },
  { id: "b8", name: "Sting Energy Drink", price: 20, mrp: 20, qty: "250 ml", image: "/public/slider image/image copy 28.png", deliveryTime: "7 mins" },
  { id: "b9", name: "Monster Energy Drink", price: 110, mrp: 110, qty: "350 ml", image: "/public/slider image/image copy 29.png", deliveryTime: "8 mins" },
  { id: "b10", name: "Paper Boat Aam Panna", price: 35, mrp: 40, qty: "200 ml", image: "/public/slider image/image copy 30.png", deliveryTime: "9 mins" }
];

const freshProduce = [
  { id: "f1", name: "Fresh Onion (Pyaz)", price: 45, mrp: 60, qty: "1 kg", image: "/public/slider image/image copy 31.png", deliveryTime: "12 mins" },
  { id: "f2", name: "Tomato Hybrid (Tamatar)", price: 35, mrp: 45, qty: "500 g", image: "/public/slider image/image copy 32.png", deliveryTime: "11 mins" },
  { id: "f3", name: "Potato (Aloo)", price: 30, mrp: 40, qty: "1 kg", image: "/public/slider image/image copy 33.png", deliveryTime: "12 mins" },
  { id: "f4", name: "Fresh Coriander (Dhaniya)", price: 10, mrp: 15, qty: "100 g", image: "/public/slider image/image copy 34.png", deliveryTime: "10 mins" },
  { id: "f5", name: "Hybrid Cucumber (Kheera)", price: 25, mrp: 35, qty: "500 g", image: "/public/slider image/image copy 35.png", deliveryTime: "11 mins" },
  { id: "f6", name: "Robusta Banana", price: 55, mrp: 70, qty: "6 pcs", image: "/public/slider image/image copy 36.png", deliveryTime: "12 mins" },
  { id: "f7", name: "Apple Shimla", price: 160, mrp: 200, qty: "4 pcs", image: "/public/slider image/image copy 37.png", deliveryTime: "13 mins" },
  { id: "f8", name: "Fresh Lemon (Nimbu)", price: 20, mrp: 30, qty: "250 g", image: "/public/slider image/image copy 38.png", deliveryTime: "11 mins" },
  { id: "f9", name: "Green Chilli (Hari Mirch)", price: 15, mrp: 20, qty: "100 g", image: "/public/slider image/image copy 39.png", deliveryTime: "10 mins" },
  { id: "f10", name: "Fresh Ginger (Adrak)", price: 25, mrp: 35, qty: "100 g", image: "/public/slider image/image copy 40.png", deliveryTime: "11 mins" }
];

const sweetCravings = [
  { id: "sw1", name: "Cadbury Dairy Milk Silk", price: 80, mrp: 85, qty: "60 g", image: "/public/slider image/image copy 41.png", deliveryTime: "7 mins" },
  { id: "sw2", name: "Kwality Wall's Cornetto Chocolate", price: 60, mrp: 60, qty: "115 ml", image: "/public/slider image/image copy 42.png", deliveryTime: "8 mins" },
  { id: "sw3", name: "Amul Vanilla Magic Ice Cream", price: 90, mrp: 90, qty: "1 L", image: "/public/slider image/image copy 43.png", deliveryTime: "9 mins" },
  { id: "sw4", name: "KitKat 4 Share Finger", price: 52, mrp: 55, qty: "38 g", image: "/public/slider image/image copy 44.png", deliveryTime: "7 mins" },
  { id: "sw5", name: "Snickers Chocolate Bar", price: 45, mrp: 50, qty: "45 g", image: "/public/slider image/image copy 45.png", deliveryTime: "7 mins" },
  { id: "sw6", name: "Ferrero Rocher Pack of 4", price: 145, mrp: 150, qty: "50 g", image: "/public/slider image/image copy 46.png", deliveryTime: "8 mins" },
  { id: "sw7", name: "Haldiram's Gulab Jamun Tin", price: 210, mrp: 245, qty: "1 kg", image: "/public/slider image/image copy 47.png", deliveryTime: "10 mins" },
  { id: "sw8", name: " Hershey's Chocolate Syrup", price: 212, mrp: 230, qty: "623 g", image: "/public/slider image/image copy 48.png", deliveryTime: "9 mins" },
  { id: "sw9", name: "Bournville Rich Cocoa", price: 105, mrp: 115, qty: "80 g", image: "/public/slider image/image copy 49.png", deliveryTime: "8 mins" },
  { id: "sw10", name: "Baskin Robbins Mississippi Mud", price: 95, mrp: 100, qty: "100 ml", image: "/public/slider image/image copy 50.png", deliveryTime: "8 mins" }
];

const instantFood = [
  { id: "i1", name: "Maggi 2-Minute Masala Noodles", price: 14, mrp: 14, qty: "70 g", image: "/public/slider image/image copy 51.png", deliveryTime: "7 mins" },
  { id: "i2", name: "Kellogg's Corn Flakes Original", price: 180, mrp: 199, qty: "475 g", image: "/public/slider image/image copy 52.png", deliveryTime: "8 mins" },
  { id: "i3", name: "YiPPee! Magic Masala Noodles", price: 15, mrp: 15, qty: "70 g", image: "/public/slider image/image copy 53.png", deliveryTime: "8 mins" },
  { id: "i4", name: "Quaker Oats Original", price: 175, mrp: 195, qty: "1 kg", image: "/public/slider image/image copy 54.png", deliveryTime: "9 mins" },
  { id: "i5", name: "Ching's Secret Secret Hakka Noodles", price: 40, mrp: 45, qty: "150 g", image: "/public/slider image/image copy 55.png", deliveryTime: "9 mins" },
  { id: "i6", name: "Knorr Classic Tomato Soup", price: 55, mrp: 60, qty: "53 g", image: "/public/slider image/image copy 56.png", deliveryTime: "8 mins" },
  { id: "i7", name: "MTR 3-Minute Breakfast Poha", price: 30, mrp: 35, qty: "60 g", image: "/public/slider image/image copy 57.png", deliveryTime: "7 mins" },
  { id: "i8", name: "Tata Sampann Masala Khichdi Mix", price: 120, mrp: 140, qty: "330 g", image: "/public/slider image/image copy 58.png", deliveryTime: "9 mins" },
  { id: "i9", name: "Top Ramen Curry Noodles", price: 20, mrp: 20, qty: "70 g", image: "/public/slider image/image copy 59.png", deliveryTime: "8 mins" },
  { id: "i10", name: "Bambino Roasted Vermicelli", price: 50, mrp: 55, qty: "500 g", image: "/public/slider image/image copy 60.png", deliveryTime: "10 mins" }
];

// 2. Master Array: Heading aur Data ko link kar diya
const allCategories = [
  { title: "Dairy, Bread & Eggs", data: dairyProducts },
  { title: "Snacks & Munchies", data: snacksProducts },
  { title: "Cold Drinks & Juices", data: beverageProducts },
  { title: "Fruits & Vegetables", data: freshProduce },
  { title: "Sweet Cravings", data: sweetCravings },
  { title: "Instant Food", data: instantFood }
];

export default function ProductCard() {
  return (
   <div className="p-5 bg-[#f5f7fa] font-sans">
      
      
      {allCategories.map((category, index) => (
        <div className="w-full max-w-7xl mx-auto p-5 bg-[#f5f7fa] font-sans">
          
  
          <h2 className="text-2xl font-bold mb-4 text-[#333]">
            {category.title}
          </h2>

          {/* Swiper Slider Component */}
          <Swiper
            slidesPerView={1.5}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 2.5, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 20 }, // Desktop me 6 cards fit aayenge
            }}
            className="mySwiper pb-2.5"
          >
            
            
            {category.data.map((product) => (
              <SwiperSlide key={product.id}>
                
                {/* Blinkit Style Card UI */}
                <div className="bg-white rounded-xl p-3 border border-[#e0e0e0] shadow-sm h-full">
                 
                  {/* Image */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-30 object-contain mb-2.5 bg-white" 
                  />
                   
                  {/* Delivery Time Badge */}
                  <div className="text-[10px] font-bold text-[#1f1f1f] bg-[#f3f4f6] px-1.5 py-1 rounded inline-block mb-2">
                     {product.deliveryTime}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm m-0 mb-1 text-[#333] h-9.5 overflow-hidden">
                    {product.name}
                  </h3>

                  {/* Quantity */}
                  <p className="text-xs text-[#666] m-0 mb-2.5">
                    {product.qty}
                  </p>

                  {/* Price & Add Button */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[15px] font-bold">₹{product.price}</span>
                      
                    </div>
                    <button className="bg-[#f3fbf4] border border-[#318616] text-[#318616] px-3.5 py-1 rounded-md font-bold cursor-pointer hover:bg-green-50 transition-colors">
                      ADD
                    </button>
                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      ))}
      
    </div>
  );
}