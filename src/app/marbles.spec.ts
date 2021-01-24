import { TestScheduler } from 'rxjs/testing';

describe('test-marbles', () => {
	it('does not work', () => {
		const scheduler = new TestScheduler((actual, expected) => actual === expected);
		scheduler.run(({hot, expectObservable}) => {
			const hotObservable = hot('a', {a:1});

			expectObservable(hotObservable).toBe('a', {a:1});
		});
		expect(1).toBe(1)
	});
});
