"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/* ----------------- ZOD Schema ----------------- */
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [load, setload] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
setload(true);
  const res = await signIn("credentials", {
    redirect: false,
    email: values.email,
    password: values.password,
  });

  if (!res?.error) {
    router.push("/");
    setload(false);
  } else {
    setServerError("Invalid email or password");
    setload(false);
  }


  };

  return (
    <div className="max-w-md mx-auto my-20 p-6 bg-white rounded-lg shadow-2xl h-[400px]">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverError && (
            <div className="text-sm text-red-600">{serverError}</div>
          )}

          <Button type="submit" className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600">
             {load ? "loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
