import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';
import '../scss/layout.scss';

const MainLayout = props => (
	<div>
		<HeaderLayout>			
		    <div className="Content">
		      {props.children}
		    </div>
		</HeaderLayout>
		<FooterLayout />
	</div>
	)

export default MainLayout