'use client'
import {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Profile from '@components/Profile'


const MyProfile = () => {

    const {data: session } = useSession();
    const [posts, setPosts] = useState([]);

  console.log(session?.user.email)

    useEffect(() =>{
        const fetchPosts = async () => {
            
          const response = await fetch(`/api/user/${session?.user?.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        }

        if(session?.user.id) fetchPosts();
      }, []);


    const handleEdit =() => {

    }

    const handleDelete = async () => {

    }
  return (
    <Profile 
        name="My"
        desc='Welcome to your personalised profile page'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile