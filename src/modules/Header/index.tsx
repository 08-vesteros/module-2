import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './styled';
import { Props, TRoute } from './types';

const Header = ({ routes }: Props) => (
	<HeaderWrapper>
		<nav className='nav'>
			{routes.map((route: TRoute) => (
				<NavLink
					key={route.path}
					to={route.path}
					exact
					className='nav__link'
					activeClassName='nav__link--active'
				>
					{route.component.displayName || route.component.name}
				</NavLink>
			))}
		</nav>
	</HeaderWrapper>
);

export default Header;
