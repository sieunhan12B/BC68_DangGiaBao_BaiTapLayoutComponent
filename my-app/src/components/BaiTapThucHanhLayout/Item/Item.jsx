import "./item.scss";

const Item = () => {
  return (
    <section className="item">
      <div className="container">
        <div className="item_content">
          <div className="card">
            <img
              src="https://th.bing.com/th/id/OIP.vdo_mcJKygU0MbwfKjt2AAHaEK?rs=1&pid=ImgDetMain"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                quae repudiandae quaerat nostrum tempore nulla?
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
