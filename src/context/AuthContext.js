import  {createContext,  useReducer } from "react"
import  AuthReducer  from "./AuthReducer";

 const INITIAL_STATE = {
    user : {
        
            _id: "63d4b0874e1f3f43984580d6",
            username: "Akash",
            email: "akash@gmail.com",
            password: "$2b$10$Paem0ujzUtvz004MeGyCkeqiK1Yl0AbBTFN3UF8SPD7PS4VvE8F1K",
            profilePicture: "",
            coverPicture: "",
            followers: [],
            followings: [
                "63d4b06f4e1f3f43984580d4",
                "63d4b09a4e1f3f43984580d8",
                "63d4b0ae4e1f3f43984580da"
            ],
            isAdmin: false,
            createdAt: "2023-01-28T05:20:07.281Z",
            updatedAt: "2023-01-28T05:24:28.624Z",
            __v: 0,
            city: "Indore",
            desc: "I am a developer",
            from: "Indore",
            relationship: 1
        },
    isFetching : false,
    err : false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider =({children})=>{
    const [state , dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    return (
        <AuthContext.Provider value={
            {
                user : state.user,
                isFetching : state.isFetching,
                err : state.err,
                dispatch
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}