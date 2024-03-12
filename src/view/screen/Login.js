import { icon } from "../assets/icons/icons";
import PrimaryInput from "../component/PrimaryInput";
import { String } from "../util";

export default function LoginScreen(){
    return(
        <>
        <PrimaryInput 
            text={String.name} 
            placeholder={String.placeholdername}
            icon={icon.profile}
            />
        <PrimaryInput 
            text={String.Email} 
            placeholder={String.placeholderemail}
            icon={icon.email}
            />
       </>
    )
}