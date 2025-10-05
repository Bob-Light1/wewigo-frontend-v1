import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react"
import moment from "moment"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { dummyUserData } from "../assets/assets"

const ProductCard = ({ product }) => {
    const [likes, setLikes] = useState(product.likes_count || [])
    const currentUser = dummyUserData
    const navigate = useNavigate()
  
    const handleLike = () => {
      if (likes.includes(currentUser._id)) {
        setLikes(likes.filter(id => id !== currentUser._id))
      } else {
        setLikes([...likes, currentUser._id])
      }
    }
  
    return (
      <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
        {/* User Info */}
        <div 
          onClick={() => navigate('/profile/' + product.user._id)} 
          className="inline-flex items-center gap-3 cursor-pointer"
        >
          <img
            src={product.user.profile_picture}
            alt={product.user.full_name}
            className="w-10 h-10 rounded-full shadow"
          />
          <div>
            <div className="flex items-center space-x-1">
              <span>{product.user.full_name}</span>
              <BadgeCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-gray-500 text-sm">
              @{product.user.username} <span className="mx-1">•</span>{" "}
              {moment(product.createdAt).fromNow()}
            </div>
          </div>
        </div>
  
        {/* Product details */}
        <div className="flex flex-col gap-2">
            <span className="text-md font-bold">{product.name}</span>
            <span className="text-sm">{product.description}</span>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-2">
          {product.image_urls?.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={product.name || "Product image"} 
              className={`w-full h-48 object-contain rounded-lg ${product.image_urls.length === 1 ? 'col-span-2 h-auto' : ''}`} 
            />
          ))}
        </div>

         {/* Product price and stock*/}
         <div className="flex items-center justify-between">
            <span className="text-md font-bold">Price : {product.price} XAF</span>
            <span className="text-sm">In Stock : {product.stock}</span>
        </div>
  
        {/* Actions */}
        <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300">
          <div className="flex items-center gap-1">
            <Heart 
              className={`w-4 h-4 cursor-pointer ${likes.includes(currentUser._id) ? 'text-red-500 fill-red-500' : ''}`}
              onClick={handleLike}
            />
            <span>{likes.length}</span>
          </div>
  
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4"/>
            <span>22</span>
          </div>
  
          <div className="flex items-center gap-1">
            <Share2 className="w-4 h-4"/>
            <span>17</span>
          </div>
  
          <button className="ml-auto bg-[#ff7f3e] text-white px-3 py-1 rounded hover:bg-[#4989c8]">
            Buy now
          </button>
        </div>
      </div>
    )
  }

  export default ProductCard
  