import Head from "./Head";
import Nav from "./Nav";
import Testimonial from "./Testimonial";



export default function Home() {
  return (
    <>
      <Nav/>
      <div className="mt-10">
        <Head/>
        <Testimonial/>
      </div>
      
    </>
  );
}
