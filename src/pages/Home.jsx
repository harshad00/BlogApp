import React, {useState, useEffect} from 'react';
import appwriteService from '../appwrit/confing'
import{Container, PostCart} from '../components'

function Home() {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPost().then((posts) => 
        {
            if(posts){
            setPosts(posts.documents)
            }
        })

    }, [])
    
  if(posts.length === 0){
    return(
        <div className='w-full py-8 mt-4 twxt-cebter'>

            <Container>
                <div className='flex flex-wrap'>
                    <h1 className='text-2xl
                    font-bold hover:text-gray-500'>
                        Login to read posts
                    </h1>
                </div>
            </Container>
        </div>

    )
  }
  return (
    <div className='flex flex-wrap'>
        {
            posts.map((post) => (
                <div key={post.$id} className=' p-2
                w-1/4'>
                    <PostCart {...post} />
                </div>

            ))
        }
    </div>
  )
}


export default Home;
