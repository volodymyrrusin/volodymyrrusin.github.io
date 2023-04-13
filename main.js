const features = [
    {
        title: "Touching",
        description: "Touching description",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2UwOTU3MzI5NGIxZTZkYzU4Y2IyMzMyZjhlNWYyMzNlZTk2ZjExNCZjdD1n/3o7bu9HvCRRp7MjpT2/giphy.gif"
    },
    {
        title: "Playing",
        description: "Playing description",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzQ5NTg1ZGZlMzBkZDRhYmQ5MjEzNWY1YTk5MTRkYTJmMDU3ZDBmYiZjdD1n/EizPK3InQbrNK/giphy.gif"
    },
    {
        title: "Coding",
        description: "Coding description",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTM2YWZlNzY4YTRiOWRjNzFhYzQ4NTM3YmIyOTc0NDc5MGM0YzMzMSZjdD1n/CjIYBczW2FeuHs8Yuj/giphy.gif"
    },
    {
        title: "Scanning",
        description: "Scanning description",
        image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGQxZTAyOTMwNmUyNjMwNWFiMTk3OTJiNmEzZjVmMjZkMWZjYiZjdD1n/fn2sFqmwowbQY/giphy.gif"
    }
]

let currentFeature = 0

const updateFeature = (index) => {
    document.getElementById('feature-title').innerText = features[index].title;
    document.getElementById('feature-image').src = features[index].image;
    document.getElementById('feature-description').innerText = features[index].description;
}

updateFeature(currentFeature)

document.getElementById('left').onclick = () => {
    currentFeature = currentFeature === 0 ? features.length - 1 : currentFeature - 1;
    updateFeature(currentFeature);
}

document.getElementById('right').onclick = () => {
    currentFeature = currentFeature === features.length - 1 ? 0 : currentFeature + 1;
    updateFeature(currentFeature);
}