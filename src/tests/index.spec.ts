import { calculateCheck, generate } from "../index";

describe("Voucher Generator", () => {
	const num = generate({ length: 16, check: true });
	const length = num.length;
	const check = Number(num.substring(length - 1));
	const main = Number(num.substring(0, length - 1));
	it("should verify length", () => {
		expect(length).toBe(16);
	});
	it("should verify check digit", () => {
		expect(calculateCheck(main)).toBe(check);
	});
});
