export interface UsuarioLogeado {

    
        id: number;
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        gender: "male" | "female"; //pa que sea uno de los dos
        image: string;
        accessToken: string;
        refreshToken: string;
      
}