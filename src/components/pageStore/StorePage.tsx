import { Link } from "react-router-dom";
import "./StorePage.scss";

const StorePage = () => {
	return (
		<section className="StorePage">
			<nav className="auxNav">
        <ul>
          <li><Link to="">All</Link></li>
					<li><Link to="">Apple</Link></li>
					<li><Link to="">Samsung</Link></li>
				</ul>
			</nav>
      <h2>Store</h2>
      
      <div>
        
      </div>
		</section>
	);
};

export default StorePage;
