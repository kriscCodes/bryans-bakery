import Image from 'next/image';

interface CardProps {
	title: string;
	imageUrl: string;
}

export default function Card({ title, imageUrl}: CardProps) {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
			{/* Image */}
			<div className="relative h-48 w-full">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover"
				/>
			</div>
			
			{/* Content */}
			<div className="p-6 text-black">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
			</div>
		</div>
	);
}
