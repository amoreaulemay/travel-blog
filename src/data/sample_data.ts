import LIModel from "../models/LIModel";

export const SAMPLE_DATA: LIModel[] = [
    new LIModel({
        imageSrc: "/assets/mount-fuji.jpeg",
        country: "Japan",
        title: "Mount Fuji",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        startDate: new Date("2021-01-12"),
        endDate: new Date("2021-01-24"),
    }),
    new LIModel({
        imageSrc: "/assets/sydney-opera-house.jpg",
        country: "Australia",
        title: "Sydney Opera House",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        startDate: new Date("2021-05-27"),
        endDate: new Date("2021-06-08"),
    }),
    new LIModel({
        imageSrc: "/assets/segla.jpg",
        country: "Norway",
        title: "Segla",
        description: "Segla is one of our most visited mountains during the summer season in Senja. A local man said that sometimes there it is so crowded that there is a line at the top to get out on the cliff where Segla drops 640 meters into the sea.",
        startDate: new Date("2021-10-01"),
        endDate: new Date("2021-11-18"),
    }),
];