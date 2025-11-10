"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
};

type ButtonLinkProps = ButtonBaseProps & {
  href: string;
  external?: boolean;
  onClick?: never;
};

type ButtonActionProps = ButtonBaseProps & {
  onClick: () => void;
  href?: never;
  external?: never;
};

type ButtonProps = ButtonLinkProps | ButtonActionProps;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles
  const variantStyles = {
    primary:
      "border border-orange-500 bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-sm hover:shadow-md",
    secondary:
      "border border-gray-900 bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-sm hover:shadow-md",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500",
    ghost:
      "text-gray-700 hover:text-orange-500 hover:bg-orange-50 focus:ring-orange-500",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Icon component
  const IconComponent = icon ? (
    <Icon
      icon={icon}
      width={size === "sm" ? 16 : size === "md" ? 20 : 24}
      height={size === "sm" ? 16 : size === "md" ? 20 : 24}
    />
  ) : null;

  // Content with icon positioning
  const content = (
    <>
      {IconComponent && iconPosition === "left" && IconComponent}
      <span>{children}</span>
      {IconComponent && iconPosition === "right" && IconComponent}
    </>
  );

  // External link
  if ("href" in props && props.external) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  // Internal link
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  // Button with onClick
  return (
    <button
      onClick={props.onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default Button;
