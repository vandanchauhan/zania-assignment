import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/cards", (resolver) => {
    return HttpResponse.json([
      {
        id: 3,
        type: 'title3',
        imageUrl:
          "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        title: "Title 3",
      },
      {
        id: 4,
        type: 'title4',
        imageUrl:
          "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
        title: "Title 4",
      },
      {
        id: 5,
        type: 'title5',
        imageUrl:
          "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc",
        title: "Title 5",
      },
      {
        id: 6,
        type: 'title6',
        imageUrl:
          "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
        title: "Title 6",
      },
    ]);
  }),
];
