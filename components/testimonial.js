import '../scss/testimonial.scss';
import data from '../services/data.json';

const Testimonial = (testimonial) => (
			<ul className="testimonials">
			{testimonial.testimonials.map(function(item, index){
	            return (
	            	<li key={index}>
						<span>{index+1}</span>
						<p>
							{item.description}
							<img src={data.constants.image_url+item.image} alt=""/>
						</p>
					</li>
				);
	        })}
		</ul>
		);

export default Testimonial;