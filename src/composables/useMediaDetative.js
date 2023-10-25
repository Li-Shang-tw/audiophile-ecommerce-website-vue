import {ref} from "vue"

function getMediaType(){
    const windowSize = window.innerWidth;     
    if(windowSize >1199){
      return "desktop";
    }else if(windowSize > 599){
        return "laptop";
    }else{
        return "mobile";
    }
}
export function useMediaDetative(){    
    const mediaType =ref(getMediaType());    
    window.addEventListener("resize", (event) => {   
        mediaType.value = getMediaType();      
    });    
    return {mediaType}
}