import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "../../components/ui/form";
import { Checkbox } from "../../components/ui/checkbox";

type Props = {
  cuisine: String;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};
const CuisineCheckbox = ({ cuisine, field }: Props) => {
  const { control } = useFormContext();

  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        ></Checkbox>
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;
