import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z
    .string({
      required_error: "Restaurant name is required",
    })
    .min(1),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  searchQuery: string;
  onSubmit: (formData: SearchForm) => void;
  onReset?: () => void;
  placeholder: string;
};

const SearchBar = ({ searchQuery, onReset, onSubmit, placeholder }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({
      searchQuery,
    });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 
            ${form.formState.errors.searchQuery && "border-red-500"}`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="text-orange-500 ml-1 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                  placeholder={placeholder}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full"
        >
          Reset
        </Button>
        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
