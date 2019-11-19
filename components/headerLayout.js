import Header from './header';
import '../scss/layout.scss';

const HeaderLayout = props => (
	<div>
		<div className="main-header-body">
			<div className="main-header-inner-body">
				<div className="main-header-sub-inner-body">
					<div className="main">
						<Header />
						<div className="Content">
					      {props.children}
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)

export default HeaderLayout