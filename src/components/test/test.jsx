export default function Test(block) {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-7 mx-auto">
            <div className="section-header">
              <h2>{block.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-xl-7 mx-auto">
            <div className="section-subtitle">
              <p>{block.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
