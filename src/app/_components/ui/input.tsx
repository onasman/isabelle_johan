'use client'

import * as React from 'react'
import type { FieldValues, ControllerProps, FieldPath } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import { cn } from '~/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-stone-400 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

type FormInputProps = {
  label: string
  placeholder?: string
  description?: string
  inputProps?: InputProps & React.RefAttributes<HTMLInputElement>
}
export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  inputProps,
  label,
  placeholder,
  description,
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & FormInputProps) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={props.name}>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} {...inputProps} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
