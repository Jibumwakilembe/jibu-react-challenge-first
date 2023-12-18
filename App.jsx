import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query";
import Header from "./src/component/Header";
import Login from "./src/component/Pages/Login";
import Series from "./src/component/Pages/Series";
import Movies from "./src/component/Pages/Movies";
import Home from "./src/component/Pages/Home";




const queryClient=new QueryClient({
  defaultOption: {
      queries: {
          staleTime: Infinity,
          cacheTime: Infinity,
      }
  }
})


const App = () =>{
    return (
       <BrowserRouter>
         <QueryClientProvider client={queryClient}>

         <>
                 <header>
                </header>
    
                <h1>ADAPT ME!</h1>
                <Header />
                
             <Routes>
               <Route path='/' exact element={<Home />} />
               <Route path='/login'  element={<Login />}/>
               <Route path='/series'  element={<Series />}/>
               <Route path='/movies'  element={<Movies />}/>
             </Routes>
        </>
      </QueryClientProvider>
    </BrowserRouter>
        
    )
}

export default App