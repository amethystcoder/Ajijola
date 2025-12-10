const programList = [
  {
    title: "Sunday Worship Service",
    description:
      "Join us every Sunday for a deeply spiritual and uplifting worship experience. Our Sunday service is a time of joyful praise, heartfelt worship, and the teaching of God’s Word. Through hymns, inspired messages, and prophetic guidance, we gather as one family to renew our strength, receive divine blessings, and grow in our walk with Christ. Come and encounter the presence of God in a powerful and refreshing way.",
    themeColor: "#4a91e2ff",
    imageUrl: "../assets/sunday-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D0E6FF",
    time: "11:00 AM - 12:00 PM",
    bringAlong: "Family and Friends"
  },
  {
    title: "Wednesday Service for the Needy",
    description:
      "A special midweek service dedicated to mercy, compassion, and intercession. On Wednesdays, we lift up prayers for the needy, the oppressed, the sick, and all who require God’s divine intervention. This service focuses on heartfelt supplication, songs of healing, and spiritual support for those facing challenges. It is a time to stand in the gap for others and experience God’s love through acts of giving, prayer, and fellowship.",
    themeColor: "#50e3c3ff",
    imageUrl: "../assets/wednesday-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D0E6FF",
    time: "6:00 PM - 7:00 PM",
    bringAlong: "Items for Donation"
  },
  {
    title: "Friday Power Service",
    description:
      "End your week with an encounter of divine power and spiritual renewal. The Friday Power Service is a night of intense prayer, breakthrough worship, deliverance, and prophetic ministration. Come expecting God’s move in every area of your life as we cry unto Him for strength, victory, protection, and restoration. It is a powerful gathering designed to uplift the spirit, break yokes, and prepare you for the days ahead.",
    themeColor: "#f5a523ff",
    imageUrl: "../assets/friday-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D0E6FF",
    time: "7:00 PM - 8:30 PM",
    bringAlong: "Open Heart and Mind"
  },
  {
    title: "New Moon Service",
    description:
      "Celebrate the beginning of a new month with thanksgiving, worship, and prophetic declarations. The New Moon Service is a sacred Celestial tradition where we present the new month before God, seeking His guidance, favor, and protection. Through hymns, symbolic prayers, and spiritual consecration, we commit our journeys to the Lord and welcome His light into every new season. Join us as we honor God and step into the new month with blessing and purpose.",
    themeColor: "#9013feff",
    imageUrl: "../assets/new-moon-service.jpg",
    forgroundColor: "#FFFFFF",
    othercolor: "#D0E6FF",
    time: "6:00 PM - 7:30 PM",
    bringAlong: "Family and Friends"
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
