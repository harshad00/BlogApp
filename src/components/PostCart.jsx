import React from 'react';
import appwriteService  from "../appwrit/confing"
import { Link } from 'react-router-dom';

function PostCart({$id, title, featureImage}) {
  return (
    <Link to={`/opst/${$id}`}>
  <div className='w-full bf-gray-100 rounded-xl p-4'> 
  <div className='w-full justify-center mb-4'>
    <img src={appwriteService.getFilePreview(featureImage)} 
    alt="{title}" className=' rounded-lg' />

  </div>
  <h2 className='text-xl font-bold'>{title}</h2>
  </div>
    </Link>
  );
}

export default PostCart;
