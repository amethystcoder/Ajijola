const programList = [
    {
        title: "Sunday Worship Service",
        description: "Join us every Sunday for a spiritually uplifting worship service filled with praise, worship, and the word of God.",
        themeColor: "#4a91e2ff",
        imageUrl: "../assets/sunday-service.jpg",
        forgroundColor: "#FFFFFF",
        othercolor: "#D0E6FF",
        time: "11:00 AM - 12:00 PM",
        bringAlong: "Family and Friends"
    },
    {
        title: "Wednesday Service for the Needy",
        description: "A midweek service dedicated to praying for God's blessing and mercy for ourselves and those in need of support.",
        themeColor: "#50e3c3ff",
        imageUrl: "../assets/wednesday-service.jpg",
        forgroundColor: "#FFFFFF",
        othercolor: "#D0E6FF",
        time: "6:00 PM - 7:00 PM",
        bringAlong: "Items for Donation"
    },
    {
        title: "Friday Power Service",
        description: "Experience the power of God through fervent prayers, deliverance sessions, and spiritual teachings every Friday evening.",
        themeColor: "#f5a523ff",
        imageUrl: "../assets/friday-service.jpg",
        forgroundColor: "#FFFFFF",
        othercolor: "#D0E6FF",
        time: "7:00 PM - 8:30 PM",
        bringAlong: "Open Heart and Mind"
    },
    {
        title: "New Moon Service",
        description: "Celebrate the new moon with us through special prayers and thanksgiving services held at the first Thursday of each month.",
        themeColor: "#9013feff",
        imageUrl: "../assets/new-moon-service.jpg",
        forgroundColor: "#FFFFFF",
        othercolor: "#D0E6FF",
        time: "6:00 PM - 7:30 PM",
        bringAlong: "Family and Friends"
    },

]

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
    document.getElementById('join-button').style.backgroundColor = program.othercolor;
    //sliding animation
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