import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyProductsData } from '../assets/assets'
import Loading from '../components/Loading'
import ProductCard from '../components/ProductCard'

const Stores = () => {

    const [input, setInput] = useState('')
    const [products, setProducts] = useState(dummyProductsData)
    const [loading, setLoading] = useState(false)
    const [productFeeds, setProductFeeds] = useState([])

    const fetchProducts = async () => {
        setProductFeeds(dummyProductsData)
        setLoading(false)
    }

    const handleSearch = async (e) => {
    if(e.key === 'Enter'){
        setProducts([])
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 1000)
    }
    }

    useEffect(() => {
        fetchProducts()
      }, [])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8 mx-4 px-4'>
      <div className='basis-1/2 mx-auto p-6'>

        {/* Title */}
        <div className='mb-8 flex flex-col items-center justify-center lg:items-start'>
            <h1 className='text-3xl font-bold text-slate-900 mb-2'>All Products</h1>
            <p className='text-slate-600 text-center'>Buy or Sell Products to finance your travel project !</p>
        </div>

        {/* Search */}
        <div className='mb-8 shadow-md rounded-md border border-slate-200/60 bg-white/80'>
            <div className='p-6'>
                <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5'/>
                    <input 
                    type='text'
                    placeholder='Search product...'
                    className='pl-10 sm:pl-12 py-2 w-full border border-gray-300 rounded-md max-sm:text-sm'
                    onChange={(e) =>setInput(e.target.value)}
                    value={input}
                    onKeyUp={handleSearch}
                    />
                </div>
            </div>
        </div>
       
        <div>
        <div className='p-4 space-y-6'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </div>
     </div>
    </div>
  ) : (<Loading />)
}

export default Stores
