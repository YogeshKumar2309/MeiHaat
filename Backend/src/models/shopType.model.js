import mongoose, { Types } from "mongoose";

const shopTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [
      "Grocery",
      "Electronics",
      "Clothing",
      "Bakery",
      "Stationery",
      "Beauty",
      "Home",
      "Sports",
      "Toys",
      "Misc",
    ],
    required: true,
  },
  icon: String,
});

const ShopType = mongoose.model("ShopType", shopTypeSchema);
export default ShopType;


//  sub: {
//         type: String,
//         enum: [
//           // Grocery subcategories
//           "Fruits & Vegetables", "Dairy & Eggs", "Meat & Seafood", "Beverages", "Snacks", "Spices", "Organic",
//           // Electronics subcategories
//           "Mobile Phones", "Laptops & Computers", "Tablets & Accessories", "Cameras", "Home Appliances", "Audio", "Smart Watches",
//           // Clothing subcategories
//           "Men Clothing", "Women Clothing", "Kids Clothing", "Men Footwear", "Women Footwear",
//           // Bakery
//           "Cakes", "Bread", "Cookies", "Chocolates", "Snacks",
//           // Stationery
//           "Pens", "Notebooks", "Office Equipment", "Art & Craft",
//           // Beauty
//           "Skincare", "Haircare", "Makeup", "Grooming",
//           // Home
//           "Furniture", "Kitchen Appliances", "Bedding & Bath", "Home Decor",
//           // Sports
//           "Sportswear", "Gym Equipment", "Outdoor Sports",
//           // Toys
//           "Toys & Games", "Baby Care", "Baby Clothing",
//           // Misc
//           "Books", "Pet Supplies", "Automotive"
//         ],
//         required: true
//       }
    