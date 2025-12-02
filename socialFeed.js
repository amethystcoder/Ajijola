let socialDataList = []


window.addEventListener("DOMContentLoaded",async ()=>{
    //attempt to get data from the API
    const SocialFeed = document.getElementById("social-feed");
    //fetch the data from the embeds.json file
    try {
        const response = await fetch("./embeds.json");
        socialDataList = await response.json();
        if (socialDataList.embeds.length == 0) {
            SocialFeed.innerHTML = "No posts yet";
        } else {
            socialDataList.embeds.forEach(post => {
                post.contents.forEach(content => {
                    const postElement = document.createElement("div");
                    postElement.classList.add("post");
                    postElement.innerHTML += content;
                    SocialFeed.appendChild(postElement);
                });
            });
            SocialFeed.style.height = "max-content";
            SocialFeed.style.gap = "20px";
            SocialFeed.style.padding = "20px";
            SocialFeed.style.overflowX = "auto";
            SocialFeed.style.boxSizing = "border-box";
        }
    } catch (error) {
        console.error("Error fetching social media embeds:", error);
        SocialFeed.innerHTML = "No posts yet";
    }
    
});