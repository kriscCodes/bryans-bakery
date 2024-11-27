import Card from '@/components/Card';

export default function Home() {
  return (
		<>
			{/* Hero Section with Background Image */}
			<div className="relative h-screen w-full overflow-hidden">
				<div
					className="absolute inset-0 z-0 scale-105"
					style={{
						backgroundImage: "url('/Bakery.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						transform: 'scale(1.1)',
					}}
				>
					<div className="absolute inset-0 bg-black/50" />
				</div>
			</div>

			{/* Gallery Section */}
			<div id="gallery" className="min-h-screen w-full bg-white p-8">
				{/* Gallery Header */}
				<div className="gallery-header w-full max-w-7xl mx-auto flex justify-center items-center text-black">
					<h1 className="text-3xl font-bold mb-8">Gallery</h1>
				</div>

				{/* Gallery Cards */}
				{/* Need to turn this into a scrollable gallery when it's on mobile */}

				<div className="gallery-cards max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
					{/* Example array mapping - replace with your API data later */}
					{[
						{ title: 'Tres Leches Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Chocolate Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Vanilla Cake', imageUrl: '/Tresleches.jpg' },
						// Add more items as needed
					].map((item, index) => (
						<Card key={index} title={item.title} imageUrl={item.imageUrl} />
					))}
				</div>
			</div>

			{/* Get a Quote Section */}

			<div id="quote" className="min-h-screen w-full bg-white p-8">
				<div className="gallery-header w-full max-w-7xl mx-auto flex justify-center items-center text-black">
					<h1 className="text-3xl font-bold mb-8">Custom Orders</h1>
				</div>

				<div className="gallery-cards max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
					{/* Example array mapping - replace with your API data later */}
					{[
						{ title: 'Tres Leches Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Chocolate Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Vanilla Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Tres Leches Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Chocolate Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Vanilla Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Tres Leches Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Chocolate Cake', imageUrl: '/Tresleches.jpg' },
						{ title: 'Vanilla Cake', imageUrl: '/Tresleches.jpg' },
						// Add more items as needed
					].map((item, index) => (
						<Card key={index} title={item.title} imageUrl={item.imageUrl} />
					))}
				</div>

				<div className="w-full max-w-7xl mx-auto flex justify-center items-center mt-8 sm:mt-12 md:mt-16">
					<button className="bg-[#0F49AC] hover:bg-[#0F49AC]/90 text-white py-3 px-6 rounded-lg text-xl font-bold transition-colors duration-200">
						Get a Quote
					</button>
				</div>
			</div>
		</>
	);
}
