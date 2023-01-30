import { v4 as uuidv4 } from "uuid";

const dummyData = [
    {
        id: uuidv4,
        title: "今からやる事",
        tasks: [
            {
                id: uuidv4(),
                title: "Reactの勉強"
            },
            {
                id: uuidv4(),
                title: "Youtubeで勉強"
            },
            {
                id: uuidv4(),
                title: "ダーツの練習"
            },
        ],
    },
    {
        id: uuidv4,
        title: "この後やる事",
        tasks: [
            {
                id: uuidv4(),
                title: "Reactの勉強"
            },
            {
                id: uuidv4(),
                title: "Youtubeで勉強"
            },
            {
                id: uuidv4(),
                title: "ダーツの練習"
            },
        ],
    },
    {
        id: uuidv4,
        title: "終わった事",
        tasks: [
            {
                id: uuidv4(),
                title: "Reactの勉強"
            },
        ],
    },
]

export default dummyData;