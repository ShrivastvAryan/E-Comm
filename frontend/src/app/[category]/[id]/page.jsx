'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Heart, Star, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import { useToast } from '@chakra-ui/react'


const ProductPage = () => {

  const toast = useToast()
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);


    const [size, setSize] = useState("M");
  
    const sizes = ["XS","S", "M", "L", "XL","XXL"];
  

  useEffect(() => {
  const fetchSingleProduct = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${category}/products/${id}`);
      const data = await res.json();
      setProduct(data); // Directly set the product
    } catch (err) {
      console.error('Error fetching single product:', err);
    }
  };

  if (category && id) fetchSingleProduct();
}, [category, id]);

const cart=async()=>{
  try {
    const response = await fetch('http://localhost:5000/addcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity,
        image: product.image,
        name: product.name,
        category: product.category,
        cloth_type: product.cloth_type,
        old_price: product.old_price,
        new_price: product.new_price,
        size: size
      }),
    });

    const data = await response.json();
    if (data.success) {
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
       toast({
         position: 'top',
         title: 'Added to Cart',
         status: 'success',
         duration: 5000,
         isClosable: true,
         });
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600 animate-fade-in">
          <span>Home</span> <span className="mx-2">/</span> 
          <span>Clothing</span> <span className="mx-2">/</span> 
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name}
                className={`w-full h-full object-contain transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white group"
              >
                <Heart 
                  className={`w-5 h-5 transition-all duration-300 ${
                    isWishlisted 
                      ? 'text-red-500 fill-red-500 scale-110' 
                      : 'text-gray-600 group-hover:text-red-500'
                  }`} 
                />
              </button>

                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  -{Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}%
                </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 animate-slide-up">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-gray-900">₹{product.new_price}</span>
              {product.old_price && (
                <span className="text-xl text-gray-500 line-through">₹{product.old_price}</span>
              )}
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-semibold">
                  Save ₹{product.old_price - product.new_price}
                </span>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-gray-900">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                      size === s
                        ? 'border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-gray-900">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold bg-gray-50">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={()=>cart()}
              disabled={addedToCart}
              className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                addedToCart
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
              }`}
            >
              {addedToCart ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Added to Cart!
                </span>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-sm">Free Delivery</p>
                  <p className="text-xs text-gray-600">On orders above ₹499</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <RotateCcw className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <Shield className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-600">100% secure checkout</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-bold text-xl text-gray-900">Product Details</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold text-gray-700">Fabric:</span> 
                  <span className="ml-2 text-gray-600">{product.cloth_type}</span>
                </p>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default ProductPage;
