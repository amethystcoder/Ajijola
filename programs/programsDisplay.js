const programList = [
  {
    title: "Lord’s Day Devotional Service",
    description:
      "Every Sunday at 10:00am, we gather for the Lord’s Day Devotional Service—a sacred time of worship, thanksgiving, hymns, and the Word. This service strengthens our spiritual walk and renews our commitment to Christ. Through praise, prayer, prophecy, and devotion, the flock fellowships in unity, seeking divine blessings and spiritual upliftment for the week ahead.",
    themeColor: "#4a91e2ff",
    imageUrl: "../assets/sunday-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D0E6FF",
    time: "10:00 AM",
    bringAlong: "Faith, Heart of Worship, and Thanksgiving"
  },
  
  {
    title: "Service For The Seekers",
    description:
      "Held every Wednesday at 9:00am, this devotional service is specially designed for barren women and all who seek God’s divine favor. Each participant brings one candle, a bottle of water, and three different fruits. After prayers, worship, and sanctification, participants are laid before the Lord and covered with altar cloth. Upon rising, they eat one fruit and drink their sanctified water—symbolic acts of faith and blessing.",
    themeColor: "#50e3c3ff",
    imageUrl: "../assets/seekers-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D0FFF5",
    time: "9:00 AM",
    bringAlong: "One Candle, One Bottle of Water, Three Different Fruits"
  },

  {
    title: "Mercy Day Devotional Service",
    description:
      "Every Wednesday at 6:00pm, we gather for the Mercy Day Devotional Service—a time dedicated to seeking God’s mercy, compassion, and intervention. Worshippers lift their burdens before the Lord as we intercede for forgiveness, healing, restoration, and divine assistance. It is a peaceful yet powerful service for all seeking God’s grace.",
    themeColor: "#34c759",
    imageUrl: "../assets/mercy-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D6FFE5",
    time: "6:00 PM",
    bringAlong: "Heart of Repentance and Thanksgiving"
  },

  {
    title: "New Moon Service",
    description:
      "Observed every first Thursday of each month at exactly 12:00 midnight, the New Moon Service is one of the most sacred Celestial observances. Worshippers together commit the entire month into God’s hands. The service includes kneeling with the forehead to the ground (Nehemiah 8:6), incense burning, reverent worship, and lifting of holy hands. The congregation proclaims in unison: “Holy, Holy, Holy is the Lord God of Hosts” (Isaiah 6:3). This service ushers in blessing, direction, and divine preservation for the new month.",
    themeColor: "#9013feff",
    imageUrl: "../assets/new-moon-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#EED6FF",
    time: "12:00 Midnight (First Thursday of Every Month)",
    bringAlong: "Reverent Heart and Spirit of Worship"
  },

  {
    title: "Power Day Devotional Service",
    description:
      "Every Friday at 6:00pm, the Power Day Service brings the flock together for intense prayers, deliverance, spiritual empowerment, and breakthrough worship. It is a time to seek God’s strength, confront spiritual challenges, and receive divine upliftment. This service sets the tone for spiritual victory and prepares worshippers for the days ahead.",
    themeColor: "#f5a523ff",
    imageUrl: "../assets/friday-power.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#FFE7C7",
    time: "6:00 PM",
    bringAlong: "Open Heart and Prayerful Spirit"
  }
];


let currentIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    incrementProgramDisplay();
    setInterval(incrementProgramDisplay, 4000); // Change program every 4 seconds
    //determine if this is december
    const currentMonth = new Date().getMonth();
    if (currentMonth === 11) { // December is month 11
        const christmasCarolSection = document.getElementById('christmas-carol-section');
        christmasCarolSection.style.display = 'block';
        const christmasCarolHeading = document.getElementById('christmas-carol-title');
        christmasCarolHeading.innerText = "Join Us this " + new Date().getDay() + "th December for our Annual Christmas Carol Service!";
    }
});

function incrementProgramDisplay() {
    currentIndex++;
    if (currentIndex >= programList.length) {
        currentIndex = 0;
    }
    const program = programList[currentIndex];
    document.getElementById('program-title').innerText = program.title;
    document.getElementById('program-description').innerText = program.description;
    document.getElementById('program-time').innerText = `Time: ${program.time}`;
    document.getElementById('program-bring-along').innerText = `Bring Along: ${program.bringAlong}`;
    document.getElementById('program-image').style.backgroundImage = `url(${program.imageUrl})`;
    document.getElementById('program-image').style.backgroundColor = program.forgroundColor;
    document.getElementById('program-card').style.backgroundColor = program.themeColor;
    document.getElementById('join-button').style.backgroundColor = program.themeColor;
    const programCard = document.getElementById('program-card');
    programCard.classList.remove('slide-in');
    void programCard.offsetWidth; // Trigger reflow
    programCard.classList.add('slide-in');
}

function decrementProgramDisplay() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = programList.length - 1;
    }
    const program = programList[currentIndex];
    document.getElementById('program-title').innerText = program.title;
    document.getElementById('program-description').innerText = program.description;
    document.getElementById('program-time').innerText = `Time: ${program.time}`;
    document.getElementById('program-bring-along').innerText = `Bring Along: ${program.bringAlong}`;
    document.getElementById('program-image').style.backgroundImage = `url(${program.imageUrl})`;
    document.getElementById('program-image').style.backgroundColor = program.forgroundColor;
    document.getElementById('program-card').style.backgroundColor = program.themeColor;
    document.getElementById('join-button').style.backgroundColor = program.othercolor;
    //sliding animation
    const programCard = document.getElementById('program-card');
    programCard.classList.remove('slide-in');
    void programCard.offsetWidth; // Trigger reflow
    programCard.classList.add('slide-in');
}
