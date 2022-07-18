import { redisStorage } from "../../src/storage/redis";

describe("storage/redis", () => {
	describe("get", () => {
		const list_name = "my_test_list";

		it("should initially return empty list", async () => {
			expect(await redisStorage.get(list_name)).toEqual([]);
		});

		it("should initially return all list", async () => {
			expect(await redisStorage.get(list_name)).toEqual([]);
		});
	});

	describe("add", () => {
		const addlist_name = "add_test_list";

		it("should allowing add to list item", async () => {
			expect(await redisStorage.add(addlist_name, "chris")).toBeTruthy();

			expect(await redisStorage.get(addlist_name)).toEqual(["chris"]);
		});
	});

	describe("remove", () => {
		const addlist_name = "remove";

		it("should allowing remove  to list item", async () => {
			const name1 = "jack";
			const name2 = "anna";
			await redisStorage.add(addlist_name, name1);
			await redisStorage.add(addlist_name, name2);

			expect(await redisStorage.get(addlist_name)).toEqual([name1, name2]);

			expect(await redisStorage.remove(addlist_name, name1)).toBeTruthy();

			expect(await redisStorage.get(addlist_name)).toEqual([name2]);
		});
	});
});
