import React from 'react'
import type { Metadata } from 'next'

interface dataType {
    id: number;
    name: string;
    username: string;
    email: string
}

export async function generateMetadata({params} : {params:{id:string}}) {
    const id = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data:dataType = await res.json();

    const metaData: Metadata={
        title: data.name,
        description: data.username

    }
    return metaData
}

const SingleUser = ({ params }: { params: { id: string } }) => {
    return (
      <div className="container">
        <h1>User: {params.id}</h1>
      </div>
    );
  };

export default SingleUser
