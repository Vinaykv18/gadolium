import { Hono } from "hono";
import { signUpWithUsernameAndPassword } from "../controllers/authentication";
export const hono = new Hono();

hono.get("/authetication/signup", async (context) => {
    const { username, password } = await context.req.json();
    try {   
        const result = await signUpWithUsernameAndPassword({ username, password });
        return context.json({
            data: result
        }, 
        201);
    } catch (e) {
        return context.json({message:"Error"}, 500);
    }

});

hono.get("/health", (context) => {
    return context.json(
        {
            message: "All Ok",
        },
        200
    );
});