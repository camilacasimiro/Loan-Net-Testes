import {registerUser} from "./script"

describe("Cadastro do usuário", () =>{

    test("Não deve ter campos vazio", () => {
		const users = {
            name: "",
            email: "",
            password: "",
            contact:"",
        }

		expect(() => {
            registerUser(users);
		}).toThrow(Error);
	});
    
    test("Deve verificar se o email é válido", () => {
        const users = {
            email: "@gmail.com"
        }
        
        expect(() => {
            registerUser(users);;
		}).toThrow(Error);
    });

    test("Deve verificar o tamanho mínimo da senha", () => {
        const users = {
            name: "Jennifer Camila",
            email: "jheycamil@gmail.com",
            password: "6123",
            contact:"225481"
        }

        expect(() => {
            registerUser(users);;
		}).toThrow(Error);
    });

});

