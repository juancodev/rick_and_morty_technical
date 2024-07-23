"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { unknown, z } from "zod";

import { Button } from "app/a/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "app/a/components/ui/form";
import { Input } from "app/a/components/ui/input";

import { authenticate } from "app/utils/lib/actions";

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "Coloca el nombre de usuario.",
    })
    .max(5),
  password: z
    .string()
    .min(8, {
      message: "Coloca la contraseña.",
    })
    .max(8),
});

export function Login() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    await authenticate(values)
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="admin" {...field} />
                </FormControl>
                <FormDescription>
                  El nombre de usuario para ingresar es {`"admin"`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="*****" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  La contraseña es {`"admin123"`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
