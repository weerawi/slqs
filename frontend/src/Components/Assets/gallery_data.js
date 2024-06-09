import p1_img from './top_5.jpg';
import p2_img from './top_2.jpg';
import p3_img from './top_3.jpg';
import p4_img from './top_4.jpg';

let gallery_data = [
  {
    id: 5,
    title: "Title 1",
    image: p1_img,
    date: "2022-01-01",
    album: [
      p1_img,
      p2_img,
      p3_img,
      p4_img,
    ],
  },
  {
    id: 6,
    title: "Title 2",
    image: p2_img,
    date: "2022-01-02",
    album: [
      p1_img,
      p2_img,
      p3_img,
      p4_img,
    ],
  },
  {
    id: 7,
    title: "Title 3",
    image: p3_img,
    date: "2022-01-03",
    album: [
      p1_img,
      p2_img,
      p3_img,
      p4_img,
    ],
  },
  {
    id: 8,
    title: "Title 4",
    image: p4_img,
    date: "2022-01-04",
    album: [
      p1_img,
      p2_img,
      p3_img,
      p4_img,
    ],
  },
];

export default gallery_data;
