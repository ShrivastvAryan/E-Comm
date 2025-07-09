'use client';
import React, { useState, useEffect } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { useToast } from '@chakra-ui/react'

const Cart = () => {

  const toast = useToast()
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [removingItem, setRemovingItem] = useState(null);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const loadCartItems = async() => {
      try {
        const savedCart = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`);
        const data=await savedCart.json();
         setCartItems(data);
         setIsLoading(false);  
      } catch (error) {
        console.error('Error loading cart items:', error);            
      }
    };

    loadCartItems();

  }, []);

const removeItem = async (cartId) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deletecart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId })
    });

    const data = await response.json();

    if (data.success) {

       setCartItems((prevItems) =>
        prevItems.filter((item) => item.cartId !== cartId)
      );
      toast({
        position: 'top',
        title: 'Item removed from cart',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        position: 'top',
        title: 'Failed to remove item from cart',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  } catch (error) {
    console.error('Error removing item:', error);
    toast({
      position: 'top',
      title: 'Error communicating with server',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};

  // Update quantity of an item
 
  const subtotal = cartItems.reduce((total, item) => total + (item.new_price * item.quantity), 0);
  const shipping = subtotal > 499 ? 0 : 50;
  const total = subtotal + shipping;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-8">Your Cart</h1>
          
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-gray-100 rounded-full p-8 mb-6">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
              Looks like you have not added any items to your cart yet. Start shopping to fill it up!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Your Cart ({cartItems.length} items)</h1>
          {cartItems.length > 0 && (
            <button
            
              className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  removingItem === `${item.id}-${item.size}` ? 'opacity-50 scale-95' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Product Image */}
                  <div className="sm:w-48 h-48 sm:h-44 bg-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/400/400';
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="space-y-1 text-sm text-gray-600 mb-4">
                          <p>Price: ₹{item.new_price.toLocaleString()}</p>
                          <p>Size: {item.size}</p>
                          <p className="text-xs text-gray-500">
                            Added: {new Date(item.addedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-700">Qty:</span>
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors duration-200"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 font-semibold min-w-[50px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-gray-900">
                            ₹{(item.new_price * item.quantity).toLocaleString()}
                          </span>
                          <button
                            onClick={() => removeItem(item.cartId, item.size)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                    Add ₹{(499 - subtotal).toLocaleString()} more for free shipping!
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  Continue Shopping
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Heart className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-600">Secure Checkout</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <ShoppingBag className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-600">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;