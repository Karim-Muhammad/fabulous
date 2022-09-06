const list_videos = document.querySelector(
    ".videos .content .list ul.list-videos"
);
const preview_video = document.querySelector(
    ".videos .content .preview .img-holder"
);

let data_videos;
const options = {
    method: "GET",
    header: new Headers({ "Content-Type": "application/media" }),
    mode: "no-cors",
};
const promise = fetch("videos_data.json", options)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        data_videos = data;
        addBusinessToList();
    });

console.log(list_videos.children);

// or i can create list by this file json, insteam create before json, to be more dynamiacl
function addBusinessToList() {
    Array.from(list_videos.children).forEach((li, id) => {
        li.firstChild.textContent = data_videos[id]["video-title"];
        li.firstElementChild.textContent = data_videos[id]["duration"];
        li.setAttribute("data-src", data_videos[id]["link"]);
        addVideo(li);
    });
}

function addVideo(li) {
    li.addEventListener("click", () => {
        resetDOM();
        const videoframe = document.createElement("iframe");
        setManyAttr(videoframe, {
            autoplay: "true",
            controls: "true",
            allowFullscreen: "",
        });
        videoframe.src = li.attributes["data-src"].nodeValue;
        console.log(li.attributes["data-src"].nodeValue);
        // console.log(videoframe);
        preview_video.append(videoframe);
    });
}

function setManyAttr(elem, Attrs) {
    for (let attr in Attrs) {
        elem.setAttribute(attr, Attrs[attr]);
    }
}

function resetDOM() {
    Array.from(preview_video.children).forEach((el) => {
        el.remove();
    });
}
