import Link from 'next/link';
import '../scss/footer.scss';

const Footer = () => (
	<div>
		<footer>
			<div className="wrapper">
				<section className="col1 pad_left1">
					<h3>Toll Free: <span>X-XXX XXX XX XX</span></h3>
					Website by <Link href="#"><a target="_blank" rel="nofollow">www.xxx.com</a></Link>
				</section>
				<section className="col2 pad_left1">
					<h3>Follow Us </h3>
					<ul id="icons">
						<li><Link href="#"><a className="normaltip" title="Facebook"><img src="../static/images/icon1.gif" alt=""/></a></Link></li>
						<li><Link href="#"><a className="normaltip" title="Linkedin"><img src="../static/images/icon2.gif" alt=""/></a></Link></li>
						<li><Link href="#"><a className="normaltip" title="Twitter"><img src="../static/images/icon3.gif" alt=""/></a></Link></li>
						<li><Link href="#"><a className="normaltip" title="Delicious"><img src="../static/images/icon4.gif" alt=""/></a></Link></li>
						<li><Link href="#"><a className="normaltip" title="Technorati"><img src="../static/images/icon5.gif" alt=""/></a></Link></li>
					</ul>
				</section>
			</div>
		</footer>
	</div>
	);

export default Footer;