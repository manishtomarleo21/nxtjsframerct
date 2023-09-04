import Image from 'next/image';

const About = () => {
  return (
    <>
    {/* <h1 className="aboutPage" style={{color:'red'}}> </h1>*/}
    <h1 className="aboutPage" >
        This is the about page
    </h1>

    {/*  must attributes -  layout='fill' or height and width */}
    {/* internal by pasting the file in public-- the path is alredy set we have to give onle file name */}
    {/* <Image src='/audi.jpg' height='500' width="800" alt='audi'></Image> */}

    {/* external via link.. 1 add domain in next.config.js den paste url here */}
    <Image src='https://images.pexels.com/photos/11506450/pexels-photo-11506450.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' height='500' width="300" alt='audi'></Image>
    
    <style jsx>
        {`
            h1{
                color:blue;
                letter-spacing:0.2rem
            }
        `}

    </style>

    </>
  )
}

export default About