import Link from "next/dist/client/link"
export const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()

    return {
        props:{
            data,
        }
    }
}


const blog = ({data}) => {
  return (
    <>
    {data.slice(0,5).map((currElm)=>{
        return <div key={currElm.id}>
            <h3>{currElm.id}</h3>
          <Link href={`/${currElm.id}`}> 
          <h4>{currElm.title}</h4>
          </Link>
        </div>
    })}
    </>
  )
}

export default blog