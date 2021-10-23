import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HeaderWrapper } from './styled';
import { Props, TRoute } from './types';
import useTypedSelector from '../../store/selectors/typedSelector';
import { LoadStatus } from '../../store/types';
import { logOut } from '../../utils/user';
import { setUserError } from '../../store/reducers/user';

const Header = ({ routes }: Props) => {
	const dispatch = useDispatch();
	const { status } = useTypedSelector(state => state.user);
	const isLoggedIn = status === LoadStatus.SUCCESS;
	const signOut = async () => {
		const res = await logOut();
		if (res.status === 200) dispatch(setUserError());
	};

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
