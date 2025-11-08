const colors = [
	"#FF9999", // Warm Rose
	"#FFB266", // Soft Tangerine
	"#FFD966", // Golden Pastel
	"#99E699", // Light Emerald
	"#80C1FF", // Sky Blue
	"#C299FF", // Soft Violet
	"#FF80B3", // Medium Pink
	"#F4A460", // Sandy Orange
	"#9FE2BF", // Seafoam Green
	"#FFB6C1", // Light Coral Pink
	"#A7C7E7", // Dusty Blue
	"#DDA0DD", // Medium Orchid
];

function createBalloon() {
	const balloon = document.createElement("div");
	balloon.classList.add("balloon");

	// Random color and position
	const color = colors[Math.floor(Math.random() * colors.length)];
	balloon.style.background = `radial-gradient(circle at 30% 30%, #fff, ${color} 60%)`;
	balloon.style.left = Math.random() * 100 + "vw";
	balloon.style.animationDuration = 6 + Math.random() * 4 + "s";

	document.body.appendChild(balloon);

	// Remove after it floats out of view
	setTimeout(() => balloon.remove(), 10000);
}

// Continuously create balloons
setInterval(createBalloon, 600);

function createSparkle() {
	const sparkle = document.createElement("div");
	sparkle.classList.add("sparkle");
	sparkle.style.left = Math.random() * 100 + "vw";
	sparkle.style.animationDuration = 2 + Math.random() * 3 + "s";
	document.body.appendChild(sparkle);

	setTimeout(() => sparkle.remove(), 4000);
}

// Generate sparkles continuously
setInterval(createSparkle, 150);

//audio
function playMusic() {
	const music = document.getElementById("bgMusic");
	let playCount = 0;
	const maxPlays = 2;

	function playAgain() {
		if (playCount < maxPlays) {
			music.currentTime = 0; // restart from beginning
			music
				.play()
				.then(() => {
					playCount++;
					console.log(`Music started 🎶 (${playCount}/${maxPlays})`);
				})
				.catch((err) => {
					alert("Click again to allow music playback 🎵");
					console.error(err);
				});
		}
	}

	music.onended = () => playAgain();

	playAgain(); // first play
}
