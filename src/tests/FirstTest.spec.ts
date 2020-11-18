import { User } from "@models/User";

test("it should be ok", () => {
    const user = new User("Teste", "teste@teste.com");

    expect(user.name).toEqual("Teste");
});
