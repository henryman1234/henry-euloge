import { imageFileResizer } from "@peacechen/react-image-file-resizer";
import React, { useEffect, useState } from "react";


const  OptimizedImage = ({url, loading}:  {url: string , loading: "lazy" | "eager" |  undefined})  =>  {

    const [image400, setImage400] = useState<string>("")
    const [image800, setImage800] = useState<string>("")
    const [image1200, setImage1200] = useState<string>("")
    
    

    
    // Etat de cahrgement
    const  [isLoading, setIsLoading]  = useState(true)

    
    

    useEffect(() => {
        let isMounted = true;

        const processImage  =  async  () => {
            
            try {
                const res = await fetch(url, {method: "GET"});

                if (!res.ok) {
                    throw new Error("Erreur lors du téléchargement de l'image")
                } 

                const blob = await res.blob();

                // Le  mime
                const mimeType = blob.type.startsWith("image/") ? blob.type : "image/jpeg";

                // On construit une instance de File
                const  file = new File([blob], "output.jpg",  {type: mimeType})

                const resizePromise  = async (maxWidth: number, maxHeight: number): Promise<string> => {
                    const result  = await imageFileResizer({
                        maxWidth,
                        maxHeight,
                        file,
                        quality: 80,
                        outputType: "base64",
                        rotation: 0
                    })

                    if (typeof  result !== "string") {
                        throw new Error("Le  type de sortie n'est pas une chaine de caractères!")
                    }
                    
                    return result;
                }
            
                const [img400, img800, img1200] = await Promise.all([
                    resizePromise(400, 200),
                    resizePromise(800, 400),
                    resizePromise(1200, 600)
                ])

                if (isMounted) {
                    setImage400(img400)
                    setImage800(img800)
                    setImage1200(img1200)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log("Une érreur est survenue lors de l'opération: ", error)
                if (isMounted) setIsLoading(false)
            }
            
        }

        processImage();

        return () => {
            isMounted = false
        }
    })


    return (
        <>   
            {isLoading  && <span>Chargement de l'image en cours ...</span>}
            {!isLoading && image400 && image800 && image1200 && (
                <img 
                src={image400 || image800} 
                alt="Image optimisée"
                className="bg-transparent"
                fetchPriority="high"
                decoding="async"
                loading={loading}
                srcSet={`${image400} 400w,  ${image800} 800w , ${image1200} 1200w`}
                sizes="(max-width: 600px) 100vw, 800px" 
            />
        )}
        </>
    )

}

export default OptimizedImage