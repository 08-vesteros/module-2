import React from 'react';
import { Picker } from 'emoji-mart';
import { Props } from './types';
import { PickerWrap } from './styled';

const EmojiPicker = ({ onSelect }: Props) => (
	<PickerWrap>
		<button className='open-picker' type='button'>
			{' '}
		</button>
		<div className='picker'>
			<Picker onSelect={onSelect} title='Select an emote' emoji='tada' />
		</div>
	</PickerWrap>
);

export default EmojiPicker;
