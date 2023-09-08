type Props = {
    params: { id: string };
  };


export default function NewPost({ params:{id} }:  Props) {
 
    return <h1>Create new Post  {id}</h1>;
  }