export default {
	verbose: true,
	collectCoverageFrom: ['src/components/**/*.{ts,tsx}'],
	roots: ['<rootDir>/src'],
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js|jsx)',
		'**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
	moduleNameMapper: {
		'^components': '<rootDir>/src/components',
	},
};
