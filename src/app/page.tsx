import Image from 'next/image';

export default function Home() {
	return (
		<div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url('/FullSizeRender copy.jpeg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					filter: 'brightness(0.7)',
				}}
			/>

			{/* Centered Content */}
			<div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
				{/* Logo as a clean circle with shadow */}
				<Image
					src="/bakery-logo.jpg"
					alt="Bryan's Bakery Logo"
					width={150}
					height={150}
					className="rounded-full shadow-lg object-cover mb-8"
					priority
				/>
				{/* Coming Soon Text */}
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">
					Coming Soon
				</h1>
				{/* Subtext */}
				<p className="text-lg md:text-xl text-white mb-8 text-center max-w-xl drop-shadow">
					We&apos;re preparing something delicious for you. Our website is
					currently under construction, but you can still order from us!
				</p>
				{/* Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 mb-12">
					<a
						href="https://www.ubereats.com/store/bryans-bakery/ShO7qvutS7WCGH8ExB3ufw?diningMode=DELIVERY"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 text-center shadow"
					>
						Order on Uber Eats
					</a>
					<a
						href="https://kzmkmip45f05vy7wdq3w.lite.vusercontent.net/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 text-center shadow flex items-center justify-center gap-2"
					>
						{/* Instagram SVG Icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<rect
								width="20"
								height="20"
								x="2"
								y="2"
								rx="6"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<circle
								cx="12"
								cy="12"
								r="5"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<circle cx="17" cy="7" r="1.5" fill="currentColor" />
						</svg>
						Follow Us
					</a>
				</div>
				{/* Footer */}
				<footer className="text-white text-center text-sm opacity-80 mt-auto mb-4 drop-shadow">
					© 2025 Bryan&apos;s Bakery | Bronx, New York City
				</footer>
			</div>
		</div>
	);
}
