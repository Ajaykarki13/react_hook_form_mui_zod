import { Controller,FieldValues,Path,useFormContext } from "react-hook-form";
import { Autocomplete } from "@mui/material";
import { Option } from "../types/option";
//generics in typescript
type Props<T extends FieldValues>= {
    name: Path<T>;
    options:Option[]
}
export function RHFAutocomplete<T extends FieldValues>
({name,options,} :Props<T>){
const {control}= useFormContext();

    return (
    <Controller
    control={control}
    name={name}
    render={(params) => <Autocomplete options={options}/>}
    />
    );


}