"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MAX_MESSAGE_LENGTH = 1000;

const formSchema = z.object({
  fullName: z
    .string()
    .nonempty("Full name is required")
    .min(3, "Full name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .nonempty("Message is required")
    .max(
      MAX_MESSAGE_LENGTH,
      `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`
    ),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const message = form.watch("message", "");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="fullName">
                Full Name<span className="text-red-600">*</span>
              </Label>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  {...field}
                  id="fullName"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="email">
                Email<span className="text-red-600">*</span>
              </Label>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  aria-required="true"
                  id="Email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3">
          <Label htmlFor="message">
            Tells us about your printing needs
            <span className="text-red-600">*</span>
          </Label>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="Type your message here."
                    {...field}
                    maxLength={MAX_MESSAGE_LENGTH}
                    className="h-40"
                    aria-required="true"
                  />
                </FormControl>
                <FormDescription className="text-right">
                  {message.length}/{MAX_MESSAGE_LENGTH}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" size="lg" className="w-full">
          Send message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
