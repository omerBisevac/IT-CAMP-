const user = {
    name: "developedbyomer",
    videos: ['html','css','js','react'],
    greet() {
        let self = this;
        console.log(`Hello there ${self.name}`);
        //add function
        const getVideos = function() {
            console.log(`You currently have ${self.videos.length} videos`);
        };
        getVideos();
    }
}

user.greet();