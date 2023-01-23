import { AiFillCheckCircle, AiFillCloseCircle, AiFillMinusCircle } from 'react-icons/ai';

export default function FormIconArray({ array }: { array: string[] }) {
	return (
		<>
			{array.map((letter, index) => {
				let icon: JSX.Element = <AiFillCloseCircle />;

				switch (letter) {
					case 'W':
						icon = <AiFillCheckCircle className="text-green-500" />;
						break;

					case 'D':
						icon = <AiFillMinusCircle className="text-yellow-500" />;
						break;

					case 'L':
						icon = <AiFillCloseCircle className="text-red-500" />;
						break;

					default:
						break;
				}
				return (
					<icon.type
						key={Math.floor(Math.random() * 1000 + index)}
						className={`${icon.props.className} inline-block text-base`}
					>
						<span className="sr-only">{letter}</span>
					</icon.type>
				);
			})}
		</>
	);
}
