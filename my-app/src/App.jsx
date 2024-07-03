import Banner from "./components/BaiTapThucHanhLayout/Banner/Banner";
import Footer from "./components/BaiTapThucHanhLayout/Footer/Footer";
import Header from "./components/BaiTapThucHanhLayout/Header/Header";
import Item from "./components/BaiTapThucHanhLayout/Item/Item";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="container">
        <div className="d-flex w-100">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
