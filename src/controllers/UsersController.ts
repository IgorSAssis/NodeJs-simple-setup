import { User } from "@models/User";

export class UsersController {
    texte () {
        const user = new User("Teste", "teste@teste.com");
        console.log(user);
    }
}
