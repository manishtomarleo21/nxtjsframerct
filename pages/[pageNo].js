import { useRouter } from "next/router"

export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()

    const paths = data.map((currElm)=>{
      return{
        params:{
          pageNo:currElm.id.toString()
        }
      }
    })

    return {
      paths,
      fallback: false
    }
}

export const getStaticProps = async (context)=>{
  const id = context.params.pageNo
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const data = await res.json()

  return {
      props:{
          data,
      }
  }
}

const pageNo = ({data}) => {
    const router = useRouter();
    const pageNumber = router.query.pageNo
  return (
    <>
    {/* <h1> My dynamic routing page {pageNumber} </h1> */}
    <h1> {data.id}</h1>
    <h3> {data.title}</h3>

    </>
  )
}

export default pageNo