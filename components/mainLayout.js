import HeaderLayout from './headerLayout';
import FooterLayout from './footerLayout';
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