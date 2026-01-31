import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { natsClient } from "../../nats-client";

const path = "/api/tickets";

it("returns a 404 if the provided id does not exists", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`${path}/${id}`)
    .set("Cookie", global.signin())
    .send({
      title: "title",
      price: 20,
    })
    .expect(404);
});

it("returns a 401 if the user is not authenticated", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`${path}/${id}`)
    .send({
      title: "title",
      price: 20,
    })
    .expect(401);
});

it("returns a 401 if the user does not own the ticket", async () => {
  const response = await request(app)
    .post(`${path}`)
    .set("Cookie", global.signin())
    .send({
      title: "title",
      price: 20,
    });

  await request(app)
    .put(`${path}/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "new",
      price: 30,
    })
    .expect(401);
});

it("returns a 400 if the user provides an invalid title or price", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post(`${path}`)
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: 20,
    });

  await request(app)
    .put(`${path}/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "",
      price: 20,
    })
    .expect(400);

  await request(app)
    .put(`${path}/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: -10,
    })
    .expect(400);
});

it("updates the ticket provided valid inputs", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post(`${path}`)
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: 20,
    });

  await request(app)
    .put(`${path}/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "new title",
      price: 100,
    })
    .expect(200);

  const tickerResponse = await request(app)
    .get(`${path}/${response.body.id}`)
    .send();

  expect(tickerResponse.body.title).toEqual("new title");
  expect(tickerResponse.body.price).toEqual(100);
});

it("publishes and event", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post(`${path}`)
    .set("Cookie", cookie)
    .send({
      title: "title",
      price: 20,
    });

  await request(app)
    .put(`${path}/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "new title",
      price: 100,
    })
    .expect(200);
  expect(natsClient.client.publish).toHaveBeenCalled();
});
