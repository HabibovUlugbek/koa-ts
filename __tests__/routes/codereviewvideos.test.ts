import server from "../../src/server";
import request from "supertest";

afterEach((done) => {
	server.close();
	done();
});

describe("routes/codereviewvideos", () => {
	const games = ["World Warship", "CSGO"];

	games.forEach((game: string) => {
		it("should allow to adding game to the list ", async () => {
			const response = await request(server)
				.post("/codereviewvideos")
				.send({ game });

			expect(response.status).toEqual(201);
			expect(response.type).toEqual("application/json");
			expect(response.body.data).toEqual({
				games: game,
			});
		});
	});
});
