import data from '../services/data.json';

const Event = (event) => (
	<div className="wrapper">
		{event.items.map(function(item, index){
            return (
            	<div key={index} className={index == data.constants.numbers.zero ? "wrapper pad_bot2" : "wrapper"}>
					<figure className="left marg_right1"><img src={data.constants.site_image_url+item.image} alt=""/></figure>
					<p>
						<a href="#">{item.venue}</a><br></br>
						{item.description}
					</p>
				</div>
			);
        })}
	</div>
	);

export default Event;