let socialDataList = []

window.addEventListener("DOMContentLoaded",()=>{
    //attempt to get data from the API
    const SocialFeed = document.getElementById("social-feed");
    if (socialDataList.length == 0) {
        SocialFeed.innerHTML("No posts yet");
    }
    
})