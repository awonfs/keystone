"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { dialogClose } from "../ui/dialog";
import { useState } from "react";
import ThreeDotsWave from "../spinners/ThreeDotSpinner";
import useCreateCharacter from "@/utils/hooks/useCreateCharacter";
import { wait } from "@/utils/functions/wait";

export const formSchema = z.object({
  characterName: z.string().nonempty(),
  realm: z.string().nonempty(),
  region: z.string().nonempty(),
});

function AddCharacterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      characterName: "",
      realm: "",
      region: "eu",
    },
  });
  const createCharacter = useCreateCharacter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await createCharacter.mutateAsync(values);
      form.reset();
      dialogClose();
    } catch (error) {
      console.error(error);
    } finally {
      await wait(500);
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="characterName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Character Name</FormLabel>
              <FormControl>
                <Input placeholder="awonfs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="realm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Realm</FormLabel>
              <FormControl>
                <Input placeholder="stormreaver" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem className="w-1/3">
              <FormLabel>Region</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a region" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="eu">EU</SelectItem>
                  <SelectItem value="us">US</SelectItem>
                  <SelectItem value="kr">KR</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {isLoading ? <ThreeDotsWave /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default AddCharacterForm;
