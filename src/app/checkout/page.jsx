"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GrtCartData from "@/CarAction/GrtCartData";
import CheckMoneyCart from "@/CarAction/CheckCart";
import { toast } from "sonner";
import { useState } from "react";

// ✅ Define validation schema with Zod
const checkoutSchema = z.object({
  shippingAddress: z.object({
    details: z
      .string()
      .min(5, "Please enter more details about your address.")
      .max(200),
    phone: z
      .string()
      .regex(/^01[0-9]{9}$/, "Phone number must be a valid Egyptian number."),
    city: z.string().min(2, "City name is too short."),
  }),
});

export default function CheckoutForm() {

const[load,setload]=useState(false)

  const form = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
  });




  async function onSubmit(values) {

   const iddata= await GrtCartData()     

const payloade= await CheckMoneyCart(values,iddata.cartId)
setload(true)

    if(payloade.status=="success"){

  window.location.href = payloade.session.url;
  setload(false)
    }else{
        toast.error("some thing is wrong")
        setload(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md my-20">
      <h2 className="text-2xl font-semibold mb-4 text-center">Checkout</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Details */}
          <FormField
            control={form.control}
            name="shippingAddress.details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Details</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Apartment 5, El Tahrir St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="shippingAddress.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="01010700999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="shippingAddress.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Cairo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disable={load} type="submit" className="w-full cursor-pointer">
          {load?"loading":"  Pay Now"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
