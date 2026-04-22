"use client";

import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, Variants } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    // Show data in console as requested
    console.log("Login submitted:", data);
  };

  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col relative w-full overflow-hidden">
      {/* Top back arrow */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-8 left-8"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-[#f1f3f4] hover:bg-[#e4e6e7] text-gray-700 w-11 h-11 border border-transparent shadow-sm hover-grow"
          onClick={() => router.back()}
          type="button"
        >
          <ChevronLeft className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </Button>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[440px] mx-auto flex flex-col items-center mt-[-60px]"
        >
          {/* Header */}
          <motion.h1 
            variants={itemVariants}
            className="text-[34px] font-extrabold text-[#1a1c21] mb-2 heading text-center tracking-tight"
          >
            Log In to DreMarr
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-[#6b7280] text-center mb-10 text-[15px] leading-relaxed max-w-[340px]"
          >
            Access your account to connect, trade, and grow your network.
          </motion.p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-4">
            {/* Email Field */}
            <motion.div variants={itemVariants} className="w-full relative mb-2">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`w-full h-[54px] bg-[#e6e8eb] rounded-full px-6 text-[15px] font-medium text-gray-800 placeholder:text-[#8f96a3] outline-none focus:ring-2 focus:ring-[#768e86] focus:bg-white transition-all border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#768e86]'}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 ml-6 absolute -bottom-5">{errors.email.message}</p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants} className="w-full relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className={`w-full h-[54px] bg-[#e6e8eb] rounded-full pl-6 pr-14 text-[15px] font-medium text-gray-800 placeholder:text-[#8f96a3] outline-none focus:ring-2 focus:ring-[#768e86] focus:bg-white transition-all border ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#768e86]'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#8f96a3] hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <Eye className="w-[18px] h-[18px]" strokeWidth={2.5} />
                ) : (
                  <EyeOff className="w-[18px] h-[18px]" strokeWidth={2.5} />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-6 absolute -bottom-5">{errors.password.message}</p>
              )}
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div variants={itemVariants} className="w-full flex justify-end pt-1">
              <Link 
                href="/forgot-password" 
                className="text-[13px] font-semibold text-[#db6c5e] hover:text-[#c75e52] transition-colors"
                tabIndex={-1}
              >
                Forgot Your Password
              </Link>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full h-[54px] flex items-center justify-center bg-[#768e86] hover:bg-[#667d76] active:bg-[#596e67] text-white rounded-full font-bold text-[16px] transition-colors duration-200 hover-grow"
              >
                Log In
              </button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.p variants={itemVariants} className="mt-10 text-[14px] text-[#4b5563] font-medium">
            Dont have an account?{" "}
            <Link 
              href="/register" 
              className="text-[#768e86] hover:text-[#667d76] font-bold transition-colors"
            >
              Create an account
            </Link>
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
