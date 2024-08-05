import React, { useEffect } from "react";
import "./ImageCar.css";
import { useState } from "react";

const arr = [
	"https://picsum.photos/200/300",
	"https://picsum.photos/id/237/200/300",
	"https://picsum.photos/seed/picsum/200/300",
	"https://picsum.photos/200/300",
];
export default function ImageCar() {
	const [slideImage, setSlideImage] = useState([
		{
			id: 1,
			url: "https://picsum.photos/200/300",
		},
		{
			id: 2,
			url: "https://picsum.photos/id/237/200/300",
		},
		{
			id: 3,
			url: "https://picsum.photos/seed/picsum/200/300",
		},
		{
			id: 4,
			url: "https://picsum.photos/200/300",
		},
	]);
	const [currentimg, setCurrentimg] = useState(0);
	console.log(slideImage[currentimg], "slide-image");
	function handleLeft() {
		// if(currentimg>=0) {
		//     setCurrentimg(currentimg-1)
		// } else {
		//     setCurrentimg(slideImage.length-1)
		// }

		setCurrentimg(currentimg > 0 ? currentimg - 1 : slideImage.length - 1);
	}

	function handleRight() {
		setCurrentimg(currentimg < slideImage.length - 1 ? currentimg + 1 : 0);
		// if(currentimg<slideImage.length)
		//    setCurrentimg(currentimg+1)
		// else {
		//     setCurrentimg(0)
		// }
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentimg(currentimg === slideImage.length - 1 ? 0 : currentimg + 1);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentimg]);

	//   clearInterval(interval)

	return (
		<div>
		<div className="carousel_wrapper">
			<div className="main-container">
				{slideImage.map((url) => (
					<div className="image-container">
						<img
							src={slideImage[currentimg]?.url}
							alt="img"
							className="sliding-image"></img>
					</div>	))}
					</div>
					</div>
					<div className="button">
					<button onClick={handleLeft}>Left</button>
					<button onClick={handleRight}>Right</button>
					</div>
					</div>
	);
}
