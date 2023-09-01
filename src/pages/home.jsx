import Announcement from '../components/announcement';
import Navbar from '../components/Nav';
import Slider from '../components/slider';
import Catogeries from '../components/catogeries';
import Products from '../components/products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
    return ( <>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Catogeries/>
        <Products home={true}/>
        <NewsLetter/>
        <Footer/>
    </> );
}
 
export default Home;