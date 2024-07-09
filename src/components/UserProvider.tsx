import { FormProvider, useForm } from "react-hook-form";
import { Users } from "../users/components/Users";
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema ,schema} from '../users/types/schema';

export function Userprovider(){

const methods = useForm<Schema>({mode:'all',
        resolver: zodResolver(schema)});
        
    return (
    <FormProvider {...methods}>
        <Users/>
        </FormProvider>
    )
}