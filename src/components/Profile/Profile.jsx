import React from "react";
import { Container } from "react-bootstrap";
import AboutImage from "../../assets/about.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src={AboutImage} alt="" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="title-profile">Solusi Untuk Kebutuhan Anda</h1>
            <p className="content-profile">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, doloremque eveniet vel sapiente provident perspiciatis
              consectetur est quis nam recusandae ratione error accusamus ea,
              maiores quisquam tenetur consequatur quia quo debitis doloribus ut
              enim corrupti! Ex eum sapiente et doloremque aut placeat, maiores
              perspiciatis eaque facere nemo cumque earum possimus delectus
              fugit aperiam numquam molestiae repellat minima. Optio minus amet
              doloremque ut, voluptate ipsam. Nemo maxime rerum in quisquam,
              nobis ea, neque labore dicta enim soluta placeat aspernatur cum
              laborum dolor explicabo. Maxime quaerat, quasi consectetur, velit
              animi, illo corporis sed eum repellat quam necessitatibus modi?
              Rem inventore facere expedita eos iste nihil harum voluptatibus et
              vitae odit omnis, velit eaque recusandae labore nisi suscipit,
              consequuntur saepe sunt. Quam reiciendis nam aliquam nemo.
              Molestias inventore ex ipsum. Eos aliquam possimus doloremque
              rerum, illum iusto cupiditate! Natus iusto eligendi, perferendis
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
