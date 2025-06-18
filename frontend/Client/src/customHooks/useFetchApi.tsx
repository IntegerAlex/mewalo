import { useEffect, useState } from "react";

const useFetchApi = <T,>(apiPath: string, dependencies: any[] = []): {
    data : T[];
    loading : boolean;
    error: Error | null;
} => {
    const [data, setData] = useState<T[]>([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

   useEffect(()=>{
        const fetchData = async () =>{
            try{
                setLoading(true);
                const response = await fetch(apiPath);

                if(!response.ok){
                    throw new Error(`HTTP error! status:${response.status}`)
                }

                const result =await response.json();
                setData(Array.isArray(result) ? result : [result]);
            }
            catch(error){
                setError(error instanceof Error ? error : new Error('An unknown error occurred'));
                console.error("Error fetching data:", error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
   }, [apiPath, ...dependencies])
   return{data, loading , error};
};

export default useFetchApi;