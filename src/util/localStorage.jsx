const getTimelineDataFromStorage = () => {

    if (localStorage.getItem("timeline") === null)  setTimelineDataFromStorage([])
    else return JSON.parse(localStorage.getItem("timeline"));
}

const setTimelineDataFromStorage = (value) => {

    localStorage.setItem("timeline", JSON.stringify(value));
}

export { getTimelineDataFromStorage, setTimelineDataFromStorage };