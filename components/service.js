import '../scss/service.scss';
import data from '../services/data.json';

const Service = (service) => (
		<div className="wrap">
			{service.services.map(function(item, index){
	            return (
	            	<section key={index} className={index== data.constants.numbers.zero? "cols" : "cols pad_left1"}>
						<div className="box">
							<div>
								<h2>{item.title}</h2>
								<figure><img src={data.constants.site_image_url+item.image} alt=""/></figure>
								<p className="pad_bot1">{item.description}</p>
								<a href="#" className="button1">{data.constants.read_more}</a>
							</div>
						</div>
					</section>
				);
	        })}
		</div>
	);

export default Service;