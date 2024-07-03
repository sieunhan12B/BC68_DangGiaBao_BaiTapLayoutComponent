import "./banner.scss";
const Banner = () => {
  return (
    <section className="banner my-5">
      <div className="container">
        <div className="banner_content">
          <h1>A Warm Welcome !</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque at
            quo excepturi labore minus praesentium deserunt, qui nulla, animi
            earum sed aperiam soluta quae, suscipit ut? Possimus quibusdam
            maiores veritatis mollitia voluptas libero est exercitationem.
            Deserunt quasi provident quos culpa!
          </p>
          <button className="btn bg-primary text-white">Call to action</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
