import { AddGameRequest } from "../../src/request/AddGameRequest";
describe("request/Addgame", () => {
	it("class properties", async () => {
		const addGameRequest = new AddGameRequest();

		addGameRequest.name = "game name";

		expect(addGameRequest.name).toBeDefined();
	});
});
