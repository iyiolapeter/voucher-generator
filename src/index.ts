import { randomBytes } from "crypto";

export interface GenerateOptions {
	length: number;
	check?: boolean;
}

const intToFloat = (int: number) => {
	return int / Math.pow(2, 64);
};

const cryptoRand = () => {
	return intToFloat(parseInt(randomBytes(8).toString("hex"), 16));
};

const sumDigits = (num: number) => {
	return String(Math.floor(num))
		.split("")
		.reduce((sum, val) => {
			return (sum += Number(val));
		}, 0);
};

export const calculateCheck = (num: number | string) => {
	const check = sumDigits(Number(num)) % 10;
	return check > 0 ? 10 - check : check;
};

export const generate = ({ length, check = false }: GenerateOptions) => {
	const min = length > 1 ? (check ? Math.pow(10, length - 2) : Math.pow(10, length - 1)) : 0;
	const max = length > 1 && check ? Math.pow(10, length - 1) - 1 : Math.pow(10, length) - 1;
	const num = Math.floor(cryptoRand() * (max - min + 1) + min);
	if (!check) {
		return num.toString();
	}
	const checkDigit = calculateCheck(num);
	return `${num}${checkDigit}`;
};
