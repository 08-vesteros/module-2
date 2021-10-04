import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './styled';
import { Props, TRoute } from './types';
import useUser from '../../contexts/user';

const Header = ({ routes }: Props) => {
	const { isLoggedIn, signOut } = useUser();

	return (
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
				{isLoggedIn ? (
					<button type='button' className='nav__link' onClick={signOut}>
						Log out
					</button>
				) : null}
			</nav>
		</HeaderWrapper>
	);
};

export default Header;
