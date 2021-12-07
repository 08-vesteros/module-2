import { EmojiData } from 'emoji-mart';

export type Props = {
	onSelect?(emoji: EmojiData): void;
};
